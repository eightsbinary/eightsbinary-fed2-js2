import controllers from '../../../controllers/index';
import utils from '../../../utilities/utils';

async function init() {
  const container = document.querySelector('.container');
  clearContent(container);
  try {
    const id = utils.getUrlParams('id');
    const post = await controllers.PostController.post(id);
    const { data } = post;
    renderPost(data, container);
    attachDeleteEvent(id);
  } catch (error) {
    console.error('Error fetching posts:', error);
    container.innerHTML = '<p>Error loading post. Please try again later.</p>';
  }
}

function clearContent(target) {
  target.innerHTML = '';
}

async function renderPost(post, target) {
  const postElement = document.createElement('article');
  postElement.innerHTML = `
    <h2>${post.title}</h2>
    <p>${post.body}</p>
    <p><strong>Author:</strong> ${post.author.name}</p>
    <p><strong>Tags:</strong> ${post.tags.join(', ')}</p>
    <p><small>Created on: ${new Date(
      post.created
    ).toLocaleDateString()}</small></p>
    <button id="deletePost">Delete Post</button>
  `;
  target.appendChild(postElement);
}

function attachDeleteEvent(id) {
  const deleteButton = document.getElementById('deletePost');
  if (deleteButton) {
    deleteButton.addEventListener('click', async () => {
      const confirmed = window.confirm('Are you sure you want to delete this post?');
      if (confirmed) {
        controllers.PostController.onDeletePost(id);
      } else {
        console.log('Delete action canceled');
      }
    });
  }
}

init();
