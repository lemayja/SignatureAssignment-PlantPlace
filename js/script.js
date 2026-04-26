// Wait for form submit
document.getElementById("contactForm").addEventListener("submit", function(event) {

    // Get values
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let city = document.getElementById("city");
    let zip = document.getElementById("zip");
    let email = document.getElementById("email");

    // Capitalize first letter function
    function capitalize(input) {
        let value = input.value.trim();
        input.value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }

    // Apply capitalization
    capitalize(firstName);
    capitalize(lastName);
    capitalize(city);

    // ZIP validation (5 digits)
    let zipPattern = /^[0-9]{5}$/;
    if (!zipPattern.test(zip.value)) {
        alert("Please enter a valid 5-digit ZIP code.");
        event.preventDefault();
        return;
    }

    // Email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
        return;
    }

});