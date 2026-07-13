// ================================
// Dark Mode Toggle
// ================================

const toggle = document.getElementById("toggle");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    if (toggle) {
        toggle.textContent = "☀️";
    }
}

if (toggle) {
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
            toggle.textContent = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            toggle.textContent = "🌙";
        }
    });
}

// ================================
// Contact Form Validation
// ================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || subject === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Email Validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (message.length < 10) {
            alert("Message should be at least 10 characters long.");
            return;
        }

        alert("Message sent successfully!");

        contactForm.reset();

    });

}

// ================================
// Smooth Scroll (For Same Page Links)
// ================================

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

// ================================
// Scroll Animation
// ================================

const cards = document.querySelectorAll(".card, .skill");

function revealCards() {

    const triggerBottom = window.innerHeight * 0.85;

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {

            card.style.opacity = "1";
            card.style.transform = "translateY(0px)";

        }

    });

}

// Initial styles
cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all 0.6s ease";

});

window.addEventListener("scroll", revealCards);
window.addEventListener("load", revealCards);

// ================================
// Active Navigation Link
// ================================

const navLinks = document.querySelectorAll("nav ul li a");

const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => {

    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {

        link.style.color = "#38bdf8";
        link.style.fontWeight = "bold";

    }

});

// ================================
// Typing Effect on Home Page
// ================================

const typingElement = document.querySelector(".hero-text h3");

if (typingElement) {

    const text = "Web Developer & Programmer";

    let index = 0;

    typingElement.textContent = "";

    function typeWriter() {

        if (index < text.length) {

            typingElement.textContent += text.charAt(index);

            index++;

            setTimeout(typeWriter, 100);

        }

    }

    typeWriter();

}

// ================================
// Current Year in Footer (Optional)
// ================================

const footer = document.querySelector("footer p");

if (footer) {

    const year = new Date().getFullYear();

    footer.innerHTML = `&copy; ${year} Rashmi | All Rights Reserved.`;

}