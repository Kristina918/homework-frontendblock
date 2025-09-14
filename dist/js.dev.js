"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/*Задание №1 — Сложение числа и строки

Напишите функцию combineValue, которая принимает два параметра: number (число) и text (строка).
Функция должна возвращать результат в виде строки, где число и строка объединены через пробел.
Дополнительное условие: Если число меньше 0, функция должна возвращать строку "Некорректное значение".
Пример к заданию №1: combineValue(5, "яблок") // "5 яблок" или combineValue(-3, "яблок") // "Некорректное значение"

*/
function combineValue(number, text) {
  if (number < 0) {
    alert("Некорректное значение");
  } else {
    return alert(number + " " + text);
  }
}

combineValue(3, "Антон");
combineValue(-3, "Антон");
/*
Задание №2 — Умножение числа на два

Напишите функцию doubleNumber, которая принимает один параметр: number (число)
Функция должна возвращать результат умножения этого числа на 2.
----
*/

function doubleNumber(number) {
  return number * 2;
}

console.log(doubleNumber(prompt("Введите число")));
/*
Задание №3 — Преобразование строки в число

Напишите функцию convertToNumber, которая принимает один параметр: text (строка).
Функция должна возвращать результат преобразования строки в число.
Дополнительное условие: Вы можете протестировать функцию, передав разные строки с числами. Например, "123" или "456".
Подсказка: Используйте встроенную функцию Number() для преобразования строки в число.

Пример к заданию №3: convertToNumber("42"); // 42

----
*/

function convertToNumber(text) {
  return Number(text);
}

console.log(convertToNumber(prompt("Введите число")));
/*

Задание №4 — Функция с массивом

Напишите функцию findMaxNumber, которая принимает массив чисел numbers.
Функция должна находить и возвращать наибольшее число в массиве.
Если массив пустой, функция должна возвращать строку "Массив пустой".
Пример к заданию №4: findMaxNumber([1, 5, 9, 2]) → 9 или findMaxNumber([]) → "Массив пустой"*/

function createArray() {
  var arr = [];
  arr.push(prompt("Введите первое число:"));
  arr.push(prompt("Введите второе число:"));
  arr.push(prompt("Введите третье число:"));
  var numbers = arr.map(function (item) {
    return Number(item);
  });
  return numbers;
}

function findMaxNumber(numbers) {
  numbers = createArray();
  return Math.max.apply(Math, _toConsumableArray(numbers));
}

alert("наибольшее число: " + findMaxNumber());
//# sourceMappingURL=js.dev.js.map
