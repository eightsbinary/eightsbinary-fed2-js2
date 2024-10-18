import controllers from '../../controllers/index';

async function init() {
  const container = document.querySelector('.container');
  clearContent(container);
  try {
    const posts = await controllers.PostController.posts();
    const { data } = posts
    renderPosts(data.posts, container);
  } catch (error) {
    console.error('Error fetching posts:', error);
    container.innerHTML = '<p>Error loading posts. Please try again later.</p>';
  }
}

function clearContent(target) {
  target.innerHTML = '';
}

async function renderPosts(posts, target) {
  const postsElement = posts.map((post) => {
    const postElement = document.createElement('article');
    postElement.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.body}</p>
      <p><strong>Author:</strong> ${post.author.name}</p>
      <p><strong>Tags:</strong> ${post.tags.join(', ')}</p>
      <p><small>Created on: ${new Date(
        post.created
      ).toLocaleDateString()}</small></p>
    `;
    return postElement;
  });

  postsElement.forEach((element) => target.appendChild(element));
}

init();
