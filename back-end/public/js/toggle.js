const getLinks = document.querySelector(".links");

const getShowLinkBtn = document.querySelector(".menu-btn");

getShowLinkBtn.addEventListener("click", () => {
  getLinks.classList.toggle("show-links");
});
