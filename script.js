// Вы планируете выйти погулять днем. Если на улице дождь, то надо взять зонтик. Если на улице солнце, то надо взять солнечные очки.

// if

let isFridgeEmpty = true;

if (isFridgeEmpty === true) {
  console.log("Холодильник пуст, надо сходить в магазин");
}

// if...else

let age = 15;

if (age >= 18) {
  console.log("Доступ разрешён");
} else {
  console.log("Доступ запрещён");
}

// тернарный оператор для if...else
let grade = 4;

console.log(
  grade === 5
    ? "Отлично"
    : grade === 4
      ? "Хорошо"
      : grade === 3
        ? "Удовлетворительно"
        : "Требуется пересдача",
);

let hour = 14;

console.log(hour < 12 ? "Доброе утро!" : "Добрый день!");

// if...else if...else

let weather = "cloudy";

console.log(
  weather === "rain"
    ? "Возьмите зонтик"
    : weather === "sunny"
      ? "Возьмите солнечные очки"
      : "Непонятно, что брать!",
);



// оператор switch
/*
let weather = "snow";

switch (weather) {
  case "rain":
    console.log("Возьмите зонтик!");
    break;
  case "sunny":
    console.log("Возьмите солнечные очки!");
    break;
  case "snow":
    console.log("Наденьте пуховик и шапку!");
    break;
  case "cloudy":
    console.log("Наденьте куртку!");
    break;
  default:
    console.log("Непонятная погода, ничего не берите!");
    break;
}
*/
