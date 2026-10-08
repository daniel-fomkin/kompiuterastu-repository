const feedbackBlock = document.getElementById("feedback-block");

const API_URL = "../API/feedback";

fetch(API_URL)
    .then(response => response.json())
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