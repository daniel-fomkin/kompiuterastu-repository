const btn = document.querySelector("#logout-btn");

async function logout() {
    const response = await fetch("../../../api/auth/logout", {
        method: "POST",
        credentials: "include"
    });

    return response
}

btn.addEventListener("click", async () => {
    const response = await logout();

    location.href = "../login";
})