$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button and whatsapp button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
            $('.whatsapp-btn').fadeIn().addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
            $('.whatsapp-btn').fadeOut().removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
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

function handleWhatsAppClick(event) {
    // Display a confirmation dialog
    var confirmed = confirm("Do you want to text me on WhatsApp?");

    // If user confirms, show a message and log the interaction
    if (confirmed) {
        alert("Thank you for reaching out!");
        console.log("WhatsApp button clicked - User confirmed and initiated contact.");
    } else {
        // Provide feedback if the user cancels
        alert("No problem! Feel free to reach out whenever you're ready.");
        
        // Prevent default action and stop event propagation
        if (event.stopPropagation) {
            event.stopPropagation(); // Modern browsers
        } else {
            event.cancelBubble = true; // IE 8 and earlier
        }
        
        if (event.preventDefault) {
            event.preventDefault(); // Prevent default action
        } else {
            event.returnValue = false; // For IE 8 and earlier
        }
        
        return false; // Return false to prevent further propagation and default action
    }
}




