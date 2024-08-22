document.addEventListener('DOMContentLoaded', () => {
    let likeCount = 0;
    const likeButton = document.querySelector('.like-btn');
    const likeCountDisplay = document.querySelector('.like-count');
    const commentForm = document.querySelector('.comment-form');
    const commentInput = document.querySelector('.comment-input');
    const commentsList = document.querySelector('.comments-list');

    likeButton.addEventListener('click', () => {
        likeCount++;
        likeCountDisplay.textContent = `${likeCount} likes`;
    });

    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const commentText = commentInput.value.trim();
        if (commentText !== "") {
            const commentElement = document.createElement('li');
            commentElement.textContent = commentText;
            commentsList.appendChild(commentElement);
            commentInput.value = "";
        }
    });
});
