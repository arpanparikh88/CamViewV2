// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(function () {
    console.log("ready!");
});

var form = document.querySelector(".savingsForm");

var keys = form.querySelector(".savingsFormKeys");

var display = form.querySelector(".guardResult");

var units = document.querySelectorAll("div .unitbutton");

var lgtResult = form.querySelector(".lgtGuardResult");

var annualSavings = form.querySelector(".annualSavings");

function inArray(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) return true;
    }
    return false;
}

var hoursButtonClick = function () {
    this.parentNode.getElementsByClassName("btn-danger")[0].classList.remove("btn-danger");
    this.classList.add("btn-danger");

    var selectedKeys = form.querySelectorAll(".btn-danger");


    var sum = [];

    for (var i = 0; i < selectedKeys.length; i++) {

        sum.push(parseFloat(selectedKeys[i].value));
    }

    var newArr = [];
    newArr = sum.splice(1, 1);

    console.log(newArr);

    var result = 1;


    for (var j = 0; j < sum.length; j++) {

        result *= parseInt(sum[j]);
    }

    display.innerHTML = "$ " + result * 52;

    if (inArray(newArr, 1)) {
        annualSavings.innerHTML = "$ " + (parseFloat(result * 52 - 9000));
    }

    else if (inArray(newArr, 2)) {
        annualSavings.innerHTML = "$ " + (parseFloat(result * 52 - 18000));
    }

    else if (inArray(newArr, 3)) {
        annualSavings.innerHTML = "$ " + (parseFloat(result * 52 - 27000));
    }
};


document.querySelectorAll(".numberOfHours .btn").forEach(btn => btn.addEventListener("click", hoursButtonClick));


var daysButtonClick = function () {
    this.parentNode.getElementsByClassName("btn-danger")[0].classList.remove("btn-danger");
    this.classList.add("btn-danger");

    var selectedKeys = form.querySelectorAll(".btn-danger");


    var sum = [];

    for (var i = 0; i < selectedKeys.length; i++) {

        sum.push(parseFloat(selectedKeys[i].value));
    }

    var newArr = [];
    newArr = sum.splice(1, 1);

    var result = 1;


    for (var j = 0; j < sum.length; j++) {

        result *= parseInt(sum[j]);
    }

    display.innerHTML = "$ " + result * 52;

    if (inArray(newArr, 1)) {
        annualSavings.innerHTML = "$ " + (parseFloat(result * 52 - 9000));
    }

    else if (inArray(newArr, 2)) {
        annualSavings.innerHTML = "$ " + (parseFloat(result * 52 - 18000));
    }

    else if (inArray(newArr, 3)) {
        annualSavings.innerHTML = "$ " + (parseFloat(result * 52 - 27000));
    }
};

document.querySelectorAll(".daysPerWeek .btn").forEach(btn => btn.addEventListener("click", daysButtonClick));

var hourlyRateButtonClick = function () {
    this.parentNode.getElementsByClassName("btn-danger")[0].classList.remove("btn-danger");
    this.classList.add("btn-danger");

    var selectedKeys = form.querySelectorAll(".btn-danger");


    var sum = [];

    for (var i = 0; i < selectedKeys.length; i++) {

        sum.push(parseFloat(selectedKeys[i].value));
    }

    var newArr = [];
    newArr = sum.splice(1, 1);

    var result = 1;


    for (var j = 0; j < sum.length; j++) {

        result *= parseInt(sum[j]);
    }

    display.innerHTML = "$ " + result * 52;

    if (inArray(newArr, 1)) {
        annualSavings.innerHTML = "$ " + (parseFloat(result * 52 - 9000));
    }

    else if (inArray(newArr, 2)) {
        annualSavings.innerHTML = "$ " + (parseFloat(result * 52 - 18000));
    }

    else if (inArray(newArr, 3)) {
        annualSavings.innerHTML = "$ " + (parseFloat(result * 52 - 27000));
    }
};


document.querySelectorAll(".hourlyRate .btn").forEach(btn => btn.addEventListener("click", hourlyRateButtonClick));


var unitsButtonClick = function (e) {
    this.parentNode.getElementsByClassName("btn-danger")[0].classList.remove("btn-danger");
    this.classList.add("btn-danger");

    var selectedKeys = form.querySelectorAll(".btn-danger");


    var sum = [];

    for (var i = 0; i < selectedKeys.length; i++) {

        sum.push(parseFloat(selectedKeys[i].value));
    }

    sum.splice(1, 1);

    var result = 1;


    for (var j = 0; j < sum.length; j++) {

        result *= parseInt(sum[j]);
    }

    display.innerHTML = "$ " + result * 52;

    if (e.target.value === "1") {
        lgtResult.innerHTML = "$ " + "9000";
        annualSavings.innerHTML = "$ " + (parseFloat(result * 52 - 9000));
    }
    else if (e.target.value === "2") {
        lgtResult.innerHTML = "$ " + "18000";
        annualSavings.innerHTML = "$ " + (parseFloat(result * 52 - 18000));
    }
    else if (e.target.value === "3") {
        lgtResult.innerHTML = "$ " + "27000";
        annualSavings.innerHTML = "$ " + (parseFloat(result * 52 - 27000));
    }
};

document.querySelectorAll(".numberOfUnits .btn").forEach(btn => btn.addEventListener("click", unitsButtonClick));



var solutionsButtonClick = function () {

    this.parentNode.getElementsByClassName("btn-danger")[0].classList.remove("btn-danger");
    this.classList.add("btn-danger");
}

document.querySelectorAll(".solutionsMenuButtons .btn").forEach(btn => btn.addEventListener("click", solutionsButtonClick));


var galleryContainer = document.querySelector(".gallery-container");

var galleryContainer1 = document.querySelector(".gallery-container-1");

var galleryControlsContainer = document.querySelector(".gallery-controls");

var galleryControlsContainer1 = document.querySelector(".gallery-controls1");

var galleryControls1 = ["previous", "next"];

var galleryControls = ["previous", "next"];

var galleryItems = document.querySelectorAll(".gallery-item");

var galleryItems1 = document.querySelectorAll(".gallery-item1");

class Carousel {
    constructor(container, items, controls) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    }

    updateGallery() {
        this.carouselArray.forEach(el => {
            el.classList.remove("gallery-item-1");
            el.classList.remove("gallery-item-2");
            el.classList.remove("gallery-item-3");
        });

        this.carouselArray.slice(0, 3).forEach((el, i) => {
            el.classList.add(`gallery-item-${i + 1}`);
        });
    }

    setCurrentState(direction) {
        if (direction.className === "gallery-controls-previous") {
            this.carouselArray.unshift(this.carouselArray.pop());
        } else {
            this.carouselArray.push(this.carouselArray.shift());
        }

        this.updateGallery();
    }

    setControls() {
        this.carouselControls.forEach(control => {
            galleryControlsContainer.appendChild(document.createElement("button")).className =
                `gallery-controls-${control}`;
            document.querySelector(`.gallery-controls-${control}`).innerText = control;
        });
    }

    setControls1() {
        this.carouselControls.forEach(control => {
            galleryControlsContainer1.appendChild(document.createElement("button")).className =
                `gallery-controls1-${control}`;
            document.querySelector(`.gallery-controls1-${control}`).innerText = control;
        });
    }

    useControls() {
        var triggers = [...galleryControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener("click",
                e => {
                    e.preventDefault();
                    this.setCurrentState(control);
                });
        });

    }

    useControls1() {
        var triggers = [...galleryControlsContainer1.childNodes];
        triggers.forEach(control => {
            control.addEventListener("click",
                e => {
                    e.preventDefault();
                    this.setCurrentState(control);
                });
        });

    }
}


var firstCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

firstCarousel.setControls();

firstCarousel.useControls();

var secondCarousel = new Carousel(galleryContainer1, galleryItems1, galleryControls1);

secondCarousel.setControls1();

secondCarousel.useControls1();
