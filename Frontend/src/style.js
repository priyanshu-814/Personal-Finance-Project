
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container");
    const toggleBtn = document.querySelector(".toggle-btn");
    const signUpBtn = document.querySelector("#signUpBtn");

    // Toggle between Sign In and Sign Up
    toggleBtn.addEventListener("click", () => {
        container.classList.toggle("active");

        const toggleText = document.querySelector(".toggle-content h2");
        const toggleDescription = document.querySelector(".toggle-content p");
        
        if (container.classList.contains("active")) {
            toggleText.innerText = "Hello, Friend!";
            toggleDescription.innerText = "Enter your personal details and start your journey with us";
            toggleBtn.innerText = "Sign In";
        } else {
            toggleText.innerText = "Welcome Back!";
            toggleDescription.innerText = "To keep connected with us, please login with your personal info";
            toggleBtn.innerText = "Sign Up";
        }
    });

    // Redirect to Sign In after Sign Up
    signUpBtn.addEventListener("click", () => {
        setTimeout(() => {
            container.classList.remove("active");
            toggleText.innerText = "Welcome Back!";
            toggleDescription.innerText = "To keep connected with us, please login with your personal info";
            toggleBtn.innerText = "Sign Up";
        }, 500);
    });

    document.getElementById("signInBtn").addEventListener("click", () => {
        window.location.href = "dash.html";
    });
});
