
// Display current year in footer
const footer = document.querySelector("footer p");

footer.textContent = `© ${new Date().getFullYear()} Narek Hovakyan. All rights reserved.`;

// Smooth navigation
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        console.log("Navigation:", this.textContent);
    });
});
