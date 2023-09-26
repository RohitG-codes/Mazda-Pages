// const toggleButton = document.getElementById("toggleButton");
// const page1 = document.querySelector(".page1");
// const page2 = document.querySelector(".page2");
// const arrowIcon = document.querySelector(".arrow-icon");

// page1.style.display = "block";
// page2.style.display = "none";
// arrowIcon.classList.contains("fa-angle-up");

// toggleButton.addEventListener("click", () => {
//   if (
//     page1.style.display === "block" &&
//     arrowIcon.classList.contains("fa-angle-up")
//   ) {
//     page1.style.display = "none";
//     page2.style.display = "block";
    // arrowIcon.classList.remove("fa-angle-up");
    // arrowIcon.classList.add("fa-angle-down");
//   } else {
//     page1.style.display = "block";
//     page2.style.display = "none";
    // arrowIcon.classList.remove("fa-angle-down");
    // arrowIcon.classList.add("fa-angle-up");
//   }
// });
const toggleButton = document.getElementById("toggleButton");
const page1 = document.querySelector(".page1");
const page2 = document.querySelector(".page2");
const arrowIcon = document.querySelector(".arrow-icon");

let currentPage = 1;
arrowIcon.classList.contains("fa-angle-up");

toggleButton.addEventListener("click", () => {
    if (currentPage === 1) {
        page1.style.transform = "translateY(-100%)";
        page1.style.opacity = 0;
        page2.style.transform = "translateY(0)";
        page2.style.opacity = 1;
        arrowIcon.classList.remove("fa-angle-up");
        arrowIcon.classList.add("fa-angle-down");
        currentPage = 2;
    } else {
        page1.style.transform = "translateY(0)";
        page1.style.opacity = 1;
        page2.style.transform = "translateY(-100%)";
        page2.style.opacity = 0;
        arrowIcon.classList.remove("fa-angle-down");
        arrowIcon.classList.add("fa-angle-up");
        currentPage = 1;
    }
});