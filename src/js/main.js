'use strict';

var sandwichBtn = document.querySelector(".sandwich");
var menu = document.querySelector(".menu");
var menuList = document.querySelector(".menu__list");
var menuBrand = document.querySelector(".menu__branding");
var menuItems = document.querySelectorAll(".menu__item");

var showMenu = false;

console.log("test");

sandwichBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    sandwichBtn.classList.add("close");
    menu.classList.add("show");
    menuBrand.classList.add("show");
    menuList.classList.add("show");

    menuItems.forEach(function(item){
    item.classList.add("show")
    });

    showMenu = true;
  } else {
    sandwichBtn.classList.remove("close");
    menu.classList.remove("show");
    menuBrand.classList.remove("show");
    menuList.classList.remove("show");

    menuItems.forEach(function(item){
      item.classList.remove("show")
      });

    showMenu = false;
  }
}
