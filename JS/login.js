const form = document.querySelector("form");
const formError = form.querySelector(".error");

async function loginRequest(username, password) {
    const response = await fetch("../api/auth/login", {
        method: "POST",
        body: JSON.stringify({ username: username, password: password }),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include"
    });

    return response
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = e.target[0].value;
    const password = e.target[1].value;

    const response = await loginRequest(username, password);

    if (response.status === 401) {
        formError.innerHTML = "<p>Invalid Credentials. Try again.</p>"
        formError.classList.remove("hidden");
        return
    }

    location.href = "./feedbacks"

})