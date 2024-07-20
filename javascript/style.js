// jQuery function to ensure the script runs only after the document is ready
$(document).ready(function () {

    // Scroll event listener on the window
    $(window).scroll(function () {
        // Sticky navbar script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // Show/hide scroll-up and WhatsApp buttons
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
            $('.whatsapp-btn').fadeIn().addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
            $('.whatsapp-btn').fadeOut().removeClass("show");
        }
    });

    // Click event for scroll-up button
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // Disable smooth scroll on scroll-up button click
        $('html').css("scrollBehavior", "auto");
    });

    // Enable smooth scroll on navbar menu item click
    $('.navbar .menu li a').click(function () {
        $('html').css("scrollBehavior", "smooth");
    });

    // Toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Fullstack Developer", "Ruby on Rails Developer", "Coding Enthusiast"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Focusing on Fullstack developer", "Specializing in Ruby on Rails Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});

// Function to handle WhatsApp button click
function handleWhatsAppClick(event) {
    // Display a confirmation dialog
    let confirmed = confirm("Thank you for reaching out! Do you want to text me on WhatsApp?");

    // If user confirms, show a message and log the interaction
    if (confirmed) {
        console.log("WhatsApp button clicked - User confirmed and initiated contact.");
    } else {
        // Provide feedback if the user cancels
        if (event.stopPropagation) {
            event.stopPropagation(); // Modern browsers
        } else {
            event.cancelBubble = true; // IE 8 and earlier
        }
        
        if (event.preventDefault) {
            event.preventDefault(); // Modern browsers
        } else {
            event.returnValue = false; // IE 8 and earlier
        }
        
        return false; // Prevent default action and further propagation
    }
}

// Vanilla JavaScript function to handle form submission
// document.addEventListener("DOMContentLoaded", function() {
//     const contactForm = document.getElementById("contactForm");

//     contactForm.addEventListener("submit", function(event) {
//         event.preventDefault(); // Prevent the default form submission behavior

//         // Callback function to display a thank you message
//         function showThankYouMessage() {
//             const thankYouMessage = document.createElement("div");
//             thankYouMessage.className = "thank-you-message";
//             thankYouMessage.textContent = "Thank you for your message! I will get back to you soon.";
            
//             // Add the thank you message to the DOM
//             contactForm.appendChild(thankYouMessage);

//             // Optionally, clear the form fields
//             contactForm.reset();
//         }

//         // Call the callback function
//         showThankYouMessage();
//     });
// });

// const toggleBtn = document.querySelector('.theme-toggle-btn');
//     toggleBtn.addEventListener('click', () => {
//         document.body.classList.toggle('dark-mode');
//     });



const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    result.className = 'result-message wait'; // Add class for "Please wait..."
    result.innerHTML = "One moment—cool stuff in progress...";

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
    })
    .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
            result.className = 'result-message success'; // Add class for success
            result.innerHTML = "Boom! Your message is off to the moon. Thanks for being awesome!";
        } else {
            console.log(response);
            result.className = 'result-message error'; // Optional class for errors
            result.innerHTML = json.message;
        }
    })
    .catch(error => {
        console.log(error);
        result.className = 'result-message error'; // Optional class for errors
        result.innerHTML = "Something went wrong!";
    })
    .then(function() {
        form.reset();
        setTimeout(() => {
            result.style.display = "none";
        }, 3000);
    });
});
