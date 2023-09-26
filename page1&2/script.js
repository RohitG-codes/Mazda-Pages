document
  .getElementsByClassName("hamburger")[0]
  .addEventListener("click", function () {
    document.querySelector(".main-container").classList.add("shifted");
    document.querySelector(".box-1").style.width = "285px";
    document.querySelector(".box-2").style.width = "285px";
    document.querySelector(".box-3").style.width = "285px";
    document.querySelector(".main-header").style.paddingLeft = "18px";
  });

document
  .getElementsByClassName("hamburger-close")[0]
  .addEventListener("click", function () {
    document.querySelector(".main-container").classList.remove("shifted");
    document.querySelector(".box-1").style.width = "394px";
    document.querySelector(".box-2").style.width = "394px";
    document.querySelector(".box-3").style.width = "394px";
    document.querySelector(".main-header").style.paddingLeft = "0px";
  });
