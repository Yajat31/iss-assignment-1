const blogId = 'blog1';
let likes = parseInt(localStorage.getItem(`likes-${blogId}`)) || 0;
let comments = JSON.parse(localStorage.getItem(`comments-${blogId}`)) || [];
document.getElementById('like-count').textContent = likes;

const commentList = document.getElementById('comment-list');
comments.forEach(comment => {
  const commentElement = document.createElement('li');
  commentElement.textContent = comment;
  commentList.appendChild(commentElement);
});

document.querySelector('.like-button').addEventListener('click', function() {
  likes++;
  document.getElementById('like-count').textContent = likes;
  localStorage.setItem(`likes-${blogId}`, likes);
});

document.querySelector('.comment-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const newComment = document.getElementById('comment-input').value;
  comments.push(newComment);
  const newCommentElement = document.createElement('li');
  newCommentElement.textContent = newComment;
  commentList.appendChild(newCommentElement);
  localStorage.setItem(`comments-${blogId}`, JSON.stringify(comments));
  document.getElementById('comment-input').value = '';
});