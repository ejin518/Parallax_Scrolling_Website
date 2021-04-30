let text = document.getElementById("text");
let birds01 = document.getElementById("birds01");
let birds02 = document.getElementById("birds02");
let forest = document.getElementById("forest");
let land = document.getElementById("land");
let btn = document.getElementById("btn");
let haeder = document.getElementById("header");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  text.style.top = 50 + value * -0.2 + "%";
  birds01.style.top = value * -1.5 + "px";
  birds01.style.left = value * 2 + "px";
  birds02.style.top = value * -1.5 + "px";
  birds02.style.left = value * -5 + "px";
  btn.style.marginTop = value * 1.5 + "px";
  land.style.top = value * -0.12 + "px";
  forest.style.top = value * 0.25 + "px";
  header.style.top = value * 0.5 + "px";
});
