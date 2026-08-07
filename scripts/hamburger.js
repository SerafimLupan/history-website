/* scripts/hamburger.js */

document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const navLinks = document.getElementById("navLinks");

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener("click", function () {
            mobileMenuBtn.classList.toggle("active");
            navLinks.classList.toggle("active");
        });

        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                mobileMenuBtn.classList.remove("active");
                navLinks.classList.remove("active");
            });
        });
    }
});