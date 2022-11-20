let comments = [];
let button = document.getElementById('button');
let result = document.getElementById('comments-result');

button.onclick = checkSpam;

function checkSpam() {
    let newComment = document.getElementById('newcomment').value;
    let commentRegister = newComment.toLowerCase();
    let spam1 = /viagra/g;
    let spam2 = /XXX/gi;
    let commentSpam = commentRegister.replace(spam1, '***');
    let commentFinal = commentSpam.replace(spam2, '***');
    comments.push(commentFinal);
    generateComments();
    document.getElementById('newcomment').value = '';
}



function generateComments() {
    let commentsResult = '';
    for (let comment of comments){
        commentsResult += `<div>${comment}</div>`;
    }
    result.innerHTML = commentsResult;
}

document.addEventListener('DOMContentLoaded',
function () {
    generateComments();
});
