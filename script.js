document.addEventListener("DOMContentLoaded", function () {
    // Responsive Navbar (Hamburger Menu)
    const menuToggle = document.querySelector("#menu-toggle");
    const navMenu = document.querySelector("#nav-menu");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });

    document.addEventListener("click", (e) => {
        if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove("open");
        }
    });

    // Tap-to-Reveal Committees (Instead of Hover)
    const committees = document.querySelectorAll(".committee-box");

    committees.forEach(box => {
        box.addEventListener("click", () => {
            box.classList.toggle("active");
        });
    });

    // Smooth Scrolling for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
