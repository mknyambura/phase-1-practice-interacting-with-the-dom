const heart = document.querySelector("#heart-icon"),
likes = document.querySelector("#likes-number"),
start = document.querySelector("#start-pause"),
stop = document.querySelector("#stop"),
reset = document.querySelector("#reset"),
comments = document.querySelector("#comment-form"),
minus = document.querySelector("#minus-icon"),
plus = document.querySelector("#plus-icon");


let likesNumber = 116;

heart.addEventListener("click", () => {
    heart.classList.toggle("liked");
    if (heart.classList.contains("liked")){
        likesNumber++;
    }else{
        likesNumber--;
    }

    likes.innerHTML = likesNumber;
})


start.addEventListener("click", startButton);
stop.addEventListener("click", stopButton);
reset.addEventListener("click", resetButton);

let days = hours = minutes = seconds = microseconds = "0" + 0,
timerStart;

function startButton(){
    start.classList.add("active")
    stop.classList.remove("notActive")

    timerStart = setInterval(() => {
        microseconds++
        microseconds = microseconds < 10 ? "0" + microseconds : microseconds;

        if (microseconds === 100){
            seconds++;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            microseconds = "0" + 0;
            // console.log(seconds);
        }

        if (seconds === 60){
            minutes++
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = "0" + 0;
            console.log(minutes);
        }

        if (minutes === 60){
            hours++
            hours = hours < 10 ? "0" + hours : hours;
            minutes = "0" + 0;
            // console.log(minutes);
        }

        if (hours === 60){
            days++;
            days = days < 10? "0" + days : days;
            hours = "0" + 0;
        }

        value();
    },10);// 1000ms = 1s
}

function stopButton(){
    start.classList.remove("active");
    stop.classList.add("notActive");
    clearInterval(timerStart);
}
function resetButton(){
    start.classList.remove("active");
    stop.classList.remove("notActive");
    clearInterval(timerStart);
    days = hours = minutes = seconds = microseconds = "0" + 0;
    value();
}
function value(){
    document.querySelector(".microseconds").innerText = microseconds;
    document.querySelector("#seconds").innerText = seconds;
    document.querySelector("#minutes").innerText = minutes;
    document.querySelector("#hours").innerText = hours;
}

comments.addEventListener("submit",function(e){
    e.preventDefault();
    var inputValue = this.children[0]
    Value = inputValue.value;
    inputValue = "";

        
    var comment = document.querySelector("#list"),
    newComment = document.createElement("p");
    newComment.innerText = Value, comment.appendChild(newComment)
});
// minus.addEventListener("click", function() {
//     var counter = document.getElementById("minus-icon")
//     parseInt((counter.innerText) - 1);
// })
// plus.addEventListener("click", function() {
//     var counter = document.getElementById("plus-icon")
//     parseInt((counter.innerText) + 1);
// })