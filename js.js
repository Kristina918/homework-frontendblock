let text = document.querySelectorAll("#taskWork li");

console.log(text);
text.forEach((element) => {
  element.innerText = "Задача выполнена";
});
text.forEach((element) => {
  element.innerText = "Задача выполнена";
});

let tasks = ["Купить молоко", "Выучить JavaScript", "Пойти на тренировку"];

let list = document.querySelector("#taskAll");
list.innerHTML = "";

tasks.forEach((task) => {
  let li = document.createElement("li");
  li.textContent = task;
  list.appendChild(li);
});


const p = document.createElement("p");
p.textContent = `Домашнее задание: 
Скачайте разметку с этой страницы. Она пригодится вам для выполнения задач ниже.`;

list.prepend(p);
