const form = document.querySelector("form");

async function sendFeedback(name, email, company, title, message) {
    const response = await fetch("../../api/feedback", {
        method: "POST",
        body: JSON.stringify({
            name,
            email,
            company,
            title,
            message
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })

    return response
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const { name, email, company, title, message } = e.target
    
    const response = await sendFeedback(name.value, email.value, company.value, title.value, message.value);

    if(response.ok){
        alert("It works");
    }
    
});