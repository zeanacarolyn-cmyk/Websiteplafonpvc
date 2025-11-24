// Menu Mobile
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.onclick = () => {
    menu.classList.toggle("nav-active");
};

// Animasi scroll
const elements = document.querySelectorAll(".fade-up");

window.addEventListener("scroll", () => {
    elements.forEach(el => {
        const pos = el.getBoundingClientRect().top;
        if (pos < window.innerHeight - 80) {
            el.classList.add("active");
        }
    });
});