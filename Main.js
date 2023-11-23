// Login Page.js
document.addEventListener('DOMContentLoaded', function () {
    var currentSlide = 0;

    function showSlide(index) {
        var slides = document.querySelectorAll('.carousel-item');
        slides[currentSlide].classList.remove('active');
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function changeText() {
        var textElement = document.getElementById("Log-Text");

        if (textElement.innerHTML === "Log in") {
            textElement.innerHTML = "Sign-in";
        } else {
            textElement.innerHTML = "Log in";
        }
    }

    var messageBubble = document.getElementById('messageBubble');
    messageBubble.id = 'messageBubble';
    messageBubble.className = 'message-bubble';
    messageBubble.textContent = 'Tap here to switch';
    document.body.appendChild(messageBubble);

    messageBubble.addEventListener('click', function () {
        nextSlide();
    });
});

function login() {
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;

    if (email === "admin@gmail.com" && password === "admin") {
        window.location.replace("Home page.html");
    } else {
        alert("Incorrect email or password. Please try again.");
    }
}

function signup() {
    var username = document.getElementById("signupUsername").value;
    var email = document.getElementById("signupEmail").value;
    var password = document.getElementById("signupPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (email.indexOf('@') === -1) {
        alert("Invalid email address. Please enter a valid email.");
        return;
    }

    if (password.length !== 8) {
        alert("Password must be exactly 8 characters.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Password and Confirm Password do not match. Please try again.");
        return;
    }

    alert("Sign-up successful! You can now log in.");
}

// Home page.js
function showSelectedCategory() {
    var selectElement = document.getElementById("category-dropdown");
    var selectedOption = selectElement.options[selectElement.selectedIndex];
    var selectedValue = selectedOption.value;
    var text = document.getElementById("selected-category-message");
    text.innerHTML = "Selected value: " + selectedValue;
}

document.getElementById('toggleButton').addEventListener('click', function () {
    var testimonials = document.querySelectorAll('.testimonials .testimonial');
    testimonials.forEach(function (testimonial) {
        var isVisible = window.getComputedStyle(testimonial).display !== 'none';
        testimonial.style.display = isVisible ? 'none' : 'block';
    });
});

// Clips page.js

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("myCarousel");
    const prevButton = document.getElementById("prev-btn");
    const nextButton = document.getElementById("next-btn");
    const bgVid = document.getElementById("bgVid");

    let currentIndex = 0;
    let isAnimating = false;
    let hueRotateDegree = 90;

    function showItem(index) {
        if (!isAnimating) {
            isAnimating = true;
            const items = document.querySelectorAll(".carousel-item");
            items.forEach((item, i) => {
                const newPosition = 100 * (i - index);
                item.style.transform = `translateX(calc(${newPosition}% - ${index * 100}%))`;
            });
        }
    }

    function handleTransitionEnd() {
        isAnimating = false;
    }

    function updateHueRotate() {
        bgVid.style.filter = `hue-rotate(${hueRotateDegree}deg)`;
    }

    function nextItem() {
        currentIndex = (currentIndex + 1) % 9;
        showItem(currentIndex);

        hueRotateDegree += 30;
        updateHueRotate();
    }

    function prevItem() {
        currentIndex = (currentIndex - 1 + 9) % 9;
        showItem(currentIndex);

        hueRotateDegree -= 30;
        updateHueRotate();
    }

    showItem(currentIndex);

    nextButton.addEventListener("click", nextItem);
    prevButton.addEventListener("click", prevItem);

    carousel.addEventListener("transitionend", handleTransitionEnd);
});






