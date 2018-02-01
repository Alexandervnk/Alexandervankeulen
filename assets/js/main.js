/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var filter = document.getElementById("filter");

var formButtonLeeftijd = document.querySelector(".dropdown-button-leeftijd");

var formButtonNieuw = document.querySelector(".dropdown-button-nieuw");

var formButtonGenre = document.querySelector(".dropdown-button-genre");

var heart = document.querySelector(".heart");

var search = document.querySelector(".search-button > img")

//Hier maak ik een nieuwe variabel aan, genaamd filter.

filter.addEventListener("click", function() {

    var myButtonClasses = document.getElementById("filter-container").classList;

    if (myButtonClasses.contains("filter-content-active")) {

        myButtonClasses.remove("filter-content-active");

    } else {

        myButtonClasses.add("filter-content-active");

    }

    var filterActive = document.getElementById("filter").classList;


    if (filterActive.contains("filter-active")) {

        filterActive.remove("filter-active");

    } else {

        filterActive.add("filter-active");

    }
});


formButtonLeeftijd.addEventListener("click", function() {

    var formActive = document.querySelector(".form-container").classList;

    if (formActive.contains("dis")) {

        formActive.remove("dis");

        formActive.add("form-active");

    } else {

        formActive.remove("form-active");

        formActive.add("dis");

    }
});

formButtonNieuw.addEventListener("click", function() {

    var formActive = document.querySelector("li:nth-child(2) .form-container").classList;

    if (formActive.contains("dis")) {

        formActive.remove("dis");

        formActive.add("form-active");

    } else {

        formActive.remove("form-active");

        formActive.add("dis");

    }
});

formButtonGenre.addEventListener("click", function() {

    var formActive = document.querySelector("li:nth-child(3) .form-container").classList;

    if (formActive.contains("dis")) {

        formActive.remove("dis");

        formActive.add("form-active");

    } else {

        formActive.remove("form-active");

        formActive.add("dis");

    }
});

heart.addEventListener("click", function() {

    var imgReplace = document.querySelector(".heart").classList;

    if (imgReplace.contains("heartbeat")) {

        imgReplace.remove("heartbeat");
        imgReplace.add("heartbeat-reverse");

        document.querySelector(".heart").src = "assets/images/heart-shape.png";

    } else {
        imgReplace.remove("heartbeat-reverse");
        imgReplace.add("heartbeat");

        document.querySelector(".heart").src = "assets/images/favoriteicon.png";
    }
    
});


search.addEventListener("click", function() {

    var searchActive = document.querySelector(".search-button").classList;

    if (searchActive.contains("search-button-active")) {

        searchActive.remove("search-button-active");

        searchActive.add("search-button");

    } else {

        searchActive.remove("search-button-active");

        searchActive.add("search-button-active");

    }
});