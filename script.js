// Welcome message in browser console
console.log("Learning Hub LMS Loaded Successfully!");

// Simple button click feedback
const heroButton = document.querySelector(".hero button");

if (heroButton) {
    heroButton.addEventListener("click", () => {
        alert("Welcome! Continue your learning journey.");
    });
}