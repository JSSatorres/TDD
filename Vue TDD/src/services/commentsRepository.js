import fetch from "node-fetch";

export async function getAllComments(articleId=1) {
  return await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${articleId}`,
    // `https://jsonplaceholder.typicode.com/comments?postId=1`,
  )
    .then(response => response.json())
    .then(comments =>
      comments.map(comment => ({
        id: comment.id,
        title: comment.name,
        username: comment.email.split("@")[0],
        body: comment.body,
      })),
    );
}
