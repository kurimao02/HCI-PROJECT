// JavaScript to dynamically add the "Discover" link in the header

document.addEventListener("DOMContentLoaded", function () {
    var discoverLinkContainer = document.getElementById("discoverLinkContainer");

    var discoverLink = document.createElement("a");
    discoverLink.setAttribute("href", "discover.html");

    var logoImg = document.createElement("img");
    logoImg.setAttribute("src", "/FILES/Trident.png");
    logoImg.setAttribute("alt", "Logo");
    logoImg.setAttribute("class", "logo");

    var discoverText = document.createElement("span");
    discoverText.setAttribute("class", "discover-text");
    discoverText.textContent = "DISCOVER";

    discoverLink.appendChild(logoImg);
    discoverLink.appendChild(discoverText);

    discoverLinkContainer.appendChild(discoverLink);
});
