"use strict";


//IIFE Immediately Invoked Functional Expression
(function ()  {

    function DisplayHomePage(){
        console.log("Calling DisplayHomePage..");

        let aboutUsButton = document.getElementById("AboutUSBtn");
        aboutUsButton.addEventListener("click", function(){
            location.href = "about.html";
        });

    }
    function DisplayProductsPage() {
        console.log("Calling DisplayProductsPage..");
    }
    function DisplayServicesPage() {
        console.log("Calling DisplayServicesPage..");
    }
    function DisplayAboutPage() {
        console.log("Calling DisplayAboutPage..");
    }
    function DisplayContactPage() {
        console.log("Calling DisplayContactPage..");
    }

    function Start() {
        console.log("Starting App...");

        switch (document.title){
            case "Home":
                DisplayHomePage();
                break;
            case "Products":
                DisplayProductsPage();
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

    })()

