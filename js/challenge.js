const counter = document.querySelector('#counter'),
minus = document.querySelector('#minus'),
plus = document.querySelector('#plus'), 
heart = document.querySelector('#heart'), 
pause = document.querySelector('#pause'), 
// submit = document.querySelector('#comment-form'),
comments = document.querySelector("#comment-form");

let numberOfLikes = 0;

function likes() {
    const likes = document.querySelector('.likes');
    const likelist = document.createElement('ul');
    const ls = document.createElement('ls');
    const currentCount = counter.innerHTML;
    if(numberOfLikes >= 0) {
        numberOfLikes++;
        ls.innerHTML = `${currentCount} has been liked ${numberOfLikes} times`;
        likes.append(likelist);
        likelist.append(ls);
    }
}

// function submits(event) {
//     const comments = document.getElementsByClassName('comments'); 
//     const newComment = document.getElementById('comment-input').value;
//     const p = document.createElement('p');
//     event.preventDefault();
//     p.innerHTML = `New Comment: ${newComment}`;
//     comments.append(p);
// }


comments.addEventListener("submit",function(e){
    e.preventDefault();
    var inputValue = this.children[0]
    Value = inputValue.value;
    inputValue = "";

        
    var comment = document.querySelector("#list"),
    newComment = document.createElement("p");
    newComment.innerText = Value, comment.appendChild(newComment)
});


function counters() {
    c = setInterval(()=> {
        counter.innerHTML++;
    }, 1000);
}
 
function decrease() {
    if(counter.innerHTML > 0) {
        counter.innerHTML--;
    }
}
 
function increase() {
    counter.innerHTML++;
}
 
 function pauseTimer() {
    if(pause.innerHTML != 'Play') {
        clearInterval(c) 
        pause.innerHTML = 'Play'
 
    }else{
        counters();
        pause.innerHTML = 'pause'
    }
}

document.addEventListener('DOMContentLoaded', counters);
minus.addEventListener('click', decrease);
plus.addEventListener('click', increase);
pause.addEventListener('click', pauseTimer);
heart.addEventListener('click',likes);
// submit.addEventListener('submit',submits);