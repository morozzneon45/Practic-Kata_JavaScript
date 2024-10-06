document.addEventListener("DOMContentLoaded", function() {
  const hideButton = document.getElementById("hideButton");
  const companiesList = document.getElementById("companiesList");
  const companiesBlocks = companiesList.getElementsByClassName("main--companies-list_block");

  // Скрываем все элементы при загрузке страницы
  for (let i = 8; i < companiesBlocks.length; i++) {
    companiesBlocks[i].style.display = "none";
  }

  let isHidden = true;

  hideButton.addEventListener("click", function() {
    if (isHidden) {
      for (let i = 8; i < companiesBlocks.length; i++) {
        companiesBlocks[i].style.display = "flex";
      }
      hideButton.textContent = "Скрыть";
    } else {
      for (let i = 8; i < companiesBlocks.length; i++) {
        companiesBlocks[i].style.display = "none";
      }
      hideButton.textContent = "Показать все";
    }
    isHidden = !isHidden;
  });
});
