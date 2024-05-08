// JavaScript to dynamically add the "Discover" link in the header

// Event listener to run the code when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get the container where the "Discover" link will be added
    var discoverLinkContainer = document.getElementById("discoverLinkContainer");

    // Create a new anchor element for the "Discover" link
    var discoverLink = document.createElement("a");
    discoverLink.setAttribute("href", "discover.html"); // Set the href attribute to the desired URL

    // Create a new image element for the logo
    var logoImg = document.createElement("img");
    logoImg.setAttribute("src", "/FILES/Trident.png"); // Set the src attribute to the logo image URL
    logoImg.setAttribute("alt", "Logo"); // Set the alt attribute for accessibility
    logoImg.setAttribute("class", "logo"); // Set the class attribute for styling

    // Create a new span element for the "DISCOVER" text
    var discoverText = document.createElement("span");
    discoverText.setAttribute("class", "discover-text"); // Set the class attribute for styling
    discoverText.textContent = "DISCOVER"; // Set the text content to "DISCOVER"

    // Append the logo image and "DISCOVER" text to the anchor element
    discoverLink.appendChild(logoImg);
    discoverLink.appendChild(discoverText);

    // Append the "Discover" link to the container in the header
    discoverLinkContainer.appendChild(discoverLink);
});
