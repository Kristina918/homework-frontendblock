let text = document.getElementById("btnDblClick");
const originalText = "Нажми меня дважды";
let isChanged = false;

text.addEventListener("dblclick", function () {
  if (isChanged) {
    text.textContent = originalText;
    text.classList.remove("active");
  } else {
    text.textContent = "Кнопка нажата дважды";
    text.classList.add("active");
  }
  isChanged = !isChanged;
});

const selectColor = document.getElementById("selectColor");
selectColor.addEventListener("change", function () {
  document.body.style.backgroundColor = selectColor.value;
});

