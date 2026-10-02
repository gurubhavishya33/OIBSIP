const cursor = document.querySelector(".custom-cursor");
const cursorDot = document.querySelector(".cursor-dot");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    cursorDot.style.left = e.clientX + "px";
    cursorDot.style.top = e.clientY + "px";
});

const interactiveElements = document.querySelectorAll(
    "a, .skill-card, .project-card, .profile-card, .primary-btn, .secondary-btn"
);

interactiveElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
        cursor.classList.add("cursor-hover");
        cursorDot.classList.add("cursor-dot-hover");
    });

    element.addEventListener("mouseleave", () => {
        cursor.classList.remove("cursor-hover");
        cursorDot.classList.remove("cursor-dot-hover");
    });
});

const profileCard = document.querySelector(".profile-card");

profileCard.addEventListener("click", () => {
    profileCard.classList.toggle("flipped");
});