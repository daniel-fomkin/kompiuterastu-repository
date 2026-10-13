const feedbackButton = document.getElementById("feedback-button");
const feedbackBoard = document.getElementById("feedback-board");
const feedbackClose = document.getElementById("feedback-close");
const overlay = document.getElementById("overlay");
const replyButton = document.getElementById("feedback-button-reply");
const replyBoard = document.getElementById("feedback-reply-board");
const replyClose = document.getElementById("feedback-close-reply");

feedbackButton.addEventListener("click", function () {
    feedbackBoard.classList.add("active");
    overlay.classList.add("active");
});
feedbackClose.addEventListener("click", function () {
    feedbackBoard.classList.remove("active");
    overlay.classList.remove("active");
});

replyButton.addEventListener("click", function () {
    feedbackBoard.classList.remove("active");
    replyBoard.classList.add("active");
    overlay.classList.add("active");
});
replyClose.addEventListener("click", function () {
    replyBoard.classList.remove("active");
    overlay.classList.remove("active");
});



const feedbackBlock = document.getElementById("feedback-block");

const API_URL = "./api/feedback";

fetch(API_URL)
    .then(response => {
        console.log(response.status)
        if(response.status === 401){
            location.href = "./login"
        }
        return response.json()
    })
    .then(feedbacks => {
        feedbacks.forEach(feedback => {

            const feedbackContainer = document.createElement("div");
            feedbackContainer.classList.add("feedback-container");

            feedbackContainer.innerHTML =
                `<div class="feedback-card">
                    <h2>Name:</h2>
                    <h3>${feedback.name}</h3>
                    <h2>Company name:</h2>
                    <h3>${feedback.company}</h3>
                    <h2>Title:</h2>
                    <h3>${feedback.title}</h3>
                    <div class="feedback-button">
                        <p>Read</p>
                    </div>
                </div>`;
            feedbackBlock.appendChild(feedbackContainer);
        });
    })
    .catch(error => {
        console.log("Error:", error);
    });
