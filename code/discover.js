// JavaScript to dynamically generate the header logo

document.addEventListener("DOMContentLoaded", function () {
    var headerLogoContainer = document.getElementById("headerLogoContainer");

    var headerLogoLink = document.createElement("a");
    headerLogoLink.setAttribute("href", "home.html");

    var headerLogoImg = document.createElement("img");
    headerLogoImg.setAttribute("src", "/FILES/Trident.png");
    headerLogoImg.setAttribute("alt", "Your Logo");
    headerLogoImg.setAttribute("class", "adjustable-image");

    headerLogoLink.appendChild(headerLogoImg);

    headerLogoContainer.appendChild(headerLogoLink);
});
