let hamburger = document.querySelector(".hamburger-open");
let menu = document.querySelector(".menu-list");

hamburger.addEventListener("click", () => {
  let visibility = menu.getAttribute("data-visible");
  if (visibility === "false") {
    menu.setAttribute("data-visible", true);
    hamburger.setAttribute("data-visible", true);
  } else {
    menu.setAttribute("data-visible", false);
    hamburger.setAttribute("data-visible", false);
  }
});

let tabs = document.querySelectorAll(".tab");
let tabsContents = document.querySelectorAll(".tab-content");

let crewTabs = document.querySelectorAll(".item");
let crewTabsContents = document.querySelectorAll(".crew-tab-content");

let techTabs = document.querySelectorAll(".tech-tab");
let techTabContents = document.querySelectorAll(".tech-tab-content");
console.log(techTabContents);

tabs.forEach((item) => item.addEventListener("click", showContent));
crewTabs.forEach((item) => item.addEventListener("click", showContent));
techTabs.forEach((item) => item.addEventListener("click", showContent));

function showContent() {
  removeBorder();
  removeTabContents();
  this.classList.add("border");
  this.classList.add("white-bg");
  let visibility = document.querySelector(`#${this.id}-content`);
  let crewVisibility = document.querySelector(`#${this.id}-content`);
  let techVisibility = document.querySelector(`#${this.id}-content`);
  visibility.classList.add("show");
  crewVisibility.classList.add("show");
  techVisibility.classList.add("show");
}

function removeBorder() {
  tabs.forEach((item) => item.classList.remove("border"));
  crewTabs.forEach((item) => item.classList.remove("white-bg"));
  techTabs.forEach((item) => item.classList.remove("white-bg"));
}

function removeTabContents() {
  tabsContents.forEach((item) => item.classList.remove("show"));
  crewTabsContents.forEach((item) => item.classList.remove("show"));
  techTabContents.forEach((item) => item.classList.remove("show"));
}

const sum = () => {
  let result = 30 + 20;
  console.log(`The result is ${result}`);
};

sum();
