import { Post } from './Post';

export class Posts {
  constructor(posts = []) {
    this.posts = posts.map(
      (post) =>
        new Post(
          post.id,
          post.title,
          post.body,
          post.tags,
          post.media,
          post.created,
          post.updated,
          post.author // Adjust based on your actual data structure
        )
    );
  }
}
