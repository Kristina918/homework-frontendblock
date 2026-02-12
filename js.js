/*Задание 1 — Создайте объект book с тремя свойствами для описания книги: title, author, year. Добавьте метод book, который возвращает строку с информацией о книге, например: "Название: Герой нашего времени, Автор: Михаил Лермонтов, Год издания: 1840". Метод вывода: console.log(book.getSummary());
 */

const book = {
  title: "Герой нашего времени",
  autor: "Михаил Лермонтов",
  year: 1840,
  getSummary() {
    return `Название: ${this.title}, Автор: ${this.autor}, Год издания: ${this.year}`;
  },
};

console.log(book.getSummary());

/*
Задание 2 — Создайте объект laptop, который содержит следующие свойства:

brand — бренд ноутбука (строка),
model — модель ноутбука (строка),
processor — процессор (строка),
price — цена ноутбука (число).
Что нужно сделать:

Используйте цикл for...in, чтобы вывести в консоль все свойства и их значения.
Преобразуйте объект в массив с помощью Object.entries() и выведите массив в консоль.*/

const laptop = {
  brand: "DELL",
  model: "1255",
  processor: "INTEL",
  price: 58000,
};

for (const key in laptop) {
  const value = laptop[key];
  console.log(`${key}: ${value}`);
}

console.log(Object.entries(laptop));

/*
Задание 3 — Создайте три объекта:

basicInfo с свойствами:
name — имя пользователя (строка),
age — возраст (число).
contactInfo с свойствами:
email — электронная почта (строка),
phone — номер телефона (строка).
preferences с свойствами:
language — предпочитаемый язык (строка),
theme — тема интерфейса (строка, например, dark или light).
Что нужно сделать:

Объедините эти три объекта в новый объект userProfile с помощью Object.assign.
Выведите результат в консоль.
Попробуйте изменить одно из свойств в userProfile и выведите объект в консоль.
Заморозьте объект userProfile с помощью Object.freeze и попытайтесь удалить одно из свойств. Убедитесь, что изменения не применяются.
*/

const basicInfo = {
  name: "Антон",
  age: 30,
};
const contactInfo = {
  email: "sss@mail.ru",
  phone: "+79253176766",
};
const preferences = {
  language: "Инглиш",
  theme: "dark",
};
const userProfile = Object.assign(basicInfo, contactInfo, preferences);

console.log(userProfile);
userProfile.age = 45;
console.log(userProfile);


Object.freeze(userProfile);
delete userProfile.age;
console.log(userProfile);
