const overlay = document.getElementById("overlay");

const feedbackBlock = document.getElementById("feedback-block");

const API_URL = "./api/feedback";

fetch(API_URL)
    .then(response => {
        console.log(response.status)
        if (response.status === 401) {
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
                    <div class="feedback-button" id="feedback-button">
                        <p>Read</p>
                    </div>
                </div>
                <div class="feedback-board" id="feedback-board">
                    <div class="feedback-close" id="feedback-close">
                        <p>+</p>
                    </div>
                    <h2>Feedback</h2>
                    <h3>Name: ${feedback.name}</h3>
                    <h3>Email: ${feedback.email}</h3>
                    <h3>Company: ${feedback.company}</h3>
                    <h3>Title: ${feedback.title}</h3>
                    <h2>Message:</h2>
                    <p>${feedback.message}</p>
                    <div class="feedback-button-reply" id="feedback-button-reply">
                       <p>Reply</p>
                    </div>
                </div>
                <div class="feedback-reply-board" id="feedback-reply-board">
                    <div class="feedback-close" id="feedback-close-reply">
                        <p>+</p>
                    </div>
                    <h2>Reply</h2>
                    <form action="">
                        <label for="reply">Message:</label>
                        <textarea name="reply" id="reply" cols="30" rows="10"></textarea>
                        <button type="submit" id="feedback-reply-send">
                            Send
                        </button>
                    </form>
                </div>`;
            feedbackBlock.appendChild(feedbackContainer);


            const feedbackBoard = feedbackContainer.querySelector("#feedback-board");

            const feedbackButton = feedbackContainer.querySelector("#feedback-button");
            const feedbackClose = feedbackContainer.querySelector("#feedback-close");


            feedbackButton.addEventListener("click", function () {
                feedbackBoard.classList.add("active");
                overlay.classList.add("active");
            });

            feedbackClose.addEventListener("click", function () {
                feedbackBoard.classList.remove("active");
                overlay.classList.remove("active");
            });

            const replyButton = feedbackContainer.querySelector("#feedback-button-reply");
            const replyBoard = feedbackContainer.querySelector("#feedback-reply-board");
            const replyClose = feedbackContainer.querySelector("#feedback-close-reply");
            const replyForm = feedbackContainer.querySelector("form");

            replyButton.addEventListener("click", function () {
                replyBoard.classList.add("active");
                overlay.classList.add("active");
            });

            replyClose.addEventListener("click", function () {
                replyBoard.classList.remove("active");
                overlay.classList.remove("active");
            });

            replyForm.addEventListener("submit", function (event) {
                event.preventDefault();
                const replyMessage = replyBoard.querySelector("#reply").value;
                
                fetch(`./api/feedback/${feedback.id}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: "include",
                    body: JSON.stringify({ reply: replyMessage })
                })
                .then(response => {
                    if (!response.ok) {
                        console.log(feedback.id);
                    }
                    return response.json();
                })
                .then(data => {
                    console.log("Reply submitted successfully:", data);
                })
                .catch(error => {
                    console.error("Error submitting reply:", error);
                });
            });
        })
    })
    .catch(error => {
        console.log("Error:", error);
    });

//test