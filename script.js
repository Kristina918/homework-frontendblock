/*Домашнее задание:

Вам предоставлен API с курсами валют, относительно евро. Напишите небольшое приложение, которое отобразит данные о курсах валют, где в браузере пользователь увидит сверху строчку "евро = 1" (в апи эта цифра также есть), а ниже стоимость другой валюты, относительно евро:

USD (доллар)
RUB (рубль)
AED (дирхам)
THB (тайский бат)*/

fetch(
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json",
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const rates = data.eur; // курсы внутри объекта eur
    const currencyContainer = document.getElementById("currency");

    currencyContainer.innerHTML = `
      <p>евро = ${rates.eur}</p>
      <p>USD (доллар) = ${rates.usd}</p>
      <p>RUB (рубль) = ${rates.rub}</p>
      <p>AED (дирхам) = ${rates.aed}</p>
      <p>THB (тайский бат) = ${rates.thb}</p>
    `;
  })
  .catch(function (error) {
    console.error("Ошибка получении данных", error);
  });
