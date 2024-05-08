// JavaScript to dynamically generate the header logo

// Event listener to run the code when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get the container where the header logo will be added
    var headerLogoContainer = document.getElementById("headerLogoContainer");

    // Create a new anchor element for the header logo link
    var headerLogoLink = document.createElement("a");
    headerLogoLink.setAttribute("href", "home.html"); // Set the href attribute to the desired URL

    // Create a new image element for the header logo
    var headerLogoImg = document.createElement("img");
    headerLogoImg.setAttribute("src", "/FILES/Trident.png"); // Set the src attribute to the logo image URL
    headerLogoImg.setAttribute("alt", "Your Logo"); // Set the alt attribute for accessibility
    headerLogoImg.setAttribute("class", "adjustable-image"); // Set the class attribute for styling

    // Append the header logo image to the header logo link
    headerLogoLink.appendChild(headerLogoImg);

    // Append the header logo link to the container in the header
    headerLogoContainer.appendChild(headerLogoLink);
});
