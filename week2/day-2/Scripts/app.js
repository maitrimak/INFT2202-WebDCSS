"use strict";

// IIFE Immediately Invoked Functional Expression
(function () {
    function DisplayHomePage() {
        console.log("Calling DisplayHomePage");

        let aboutUsButton = document.getElementById("aboutusPage");
        aboutUsButton.addEventListener("click", function () {
            // Advent handler logic here if needed
            location.href = "about.html";
        });

        let MainContent = document.getElementsByTagName("main")[0];
        let MainParagraph = document.createElement("p");

        // <p id="MainParagraph" class="mt-3">This is my first main paragraph</p>
        MainParagraph.setAttribute("id", "MainParagraph");
        MainParagraph.setAttribute("class", "mt-3");
        MainParagraph.textContent = "This is my main paragraph";

        // Display to screen
        MainContent.appendChild(MainParagraph);

        // Example of using template literals for string concatenation
        let FirstString = "This is";
        let SecondString = `${FirstString} my second string`;
        MainParagraph.textContent = SecondString;

        // Displays the updated content to screen
        MainContent.appendChild(MainParagraph);

        let DocumentBody = document.body;

        //<article><p></p></article>
        let Article = document.createElement("article");
        let  ArticleParagraph = `<p id="ArticleParagraph" class="mt-3">This is my first article paragraph</p>`;
        Article.setAttribute("class", "container");
        Article.innerHTML = ArticleParagraph;
        DocumentBody.appendChild(Article);
    }

    function DisplayProductPage() {
        console.log("Calling DisplayProductPage");
    }

    function DisplayServicesPage() {
        console.log("Calling DisplayServicesPage");
    }

    function DisplayAboutPage() {
        console.log("Calling DisplayAboutPage");
    }

    function DisplayContactPage() {
        console.log("Calling DisplayContactPage");
    }

    function Start() {
        console.log("Starting App..");

        switch (document.title) {
            case "Home":
                DisplayHomePage();
                break;
            case "Products":
                DisplayProductPage();
                break;
            case "Services":
                DisplayServicesPage();
                break;
            case "About":
                DisplayAboutPage();
                break;
            case "Contact":
                DisplayContactPage();
                break;
        }
    }

    window.addEventListener("load", Start);
})();
