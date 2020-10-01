var CatalogButtonsBlock = document.querySelector(".catalog__buttons"),
  CatalogButtons = document.querySelectorAll(".catalog__btn"),
  GridTable = document.querySelectorAll(".grid_table");


CatalogButtonsBlock.addEventListener("click", e => {
  const target = e.target;
  if (target.closest(".catalog__btn")) {
    for (let i = 0; i < CatalogButtons.length; i++) {
      for (let b = 0; b < CatalogButtons.length; b++) {
        GridTable[i].style.display = "none";
        if (CatalogButtons[i].classList.contains("catalog__btn-active")) {
          CatalogButtons[i].classList.remove("catalog__btn-active");
        }
      }
      if (target == CatalogButtons[i]) {
        GridTable[i].style.display = "grid";
        target.classList.add("catalog__btn-active");
      }
    }
  }
});
