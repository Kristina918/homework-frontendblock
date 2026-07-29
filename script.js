//1) Создайте класс Car. В constructor передавайте параметры: brand, model, year. Сохраните их в свойства this.brand, this.model и this.year.

class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  getInfo() {
    console.log(
      `Марка: ${this.brand}, Модель: ${this.model}, Год выпуска: ${this.year}`,
    );
  }
  startEngine() {
    console.log("Двигатель запущен!");
  }
}
const car1 = new Car("Toyota", "Camry", 2020);
const car2 = new Car("BMW", "X5", 2022);
const car3 = new Car("Mersedes", "C-class", 2015);
car1.getInfo();
car2.getInfo();
car3.getInfo();
car1.startEngine();
car2.startEngine();
car3.startEngine();

class ElectricCar extends Car {

  constructor(brand, model, year,batteryCapacity) {
    super(brand, model, year);
    this.batteryCapacity = batteryCapacity;
   
  } startEngine() {
    console.log("Электромотор запущен!");
  }
}
const electricCar1 = new ElectricCar("Tesla", "Model S", 2020, 100);
electricCar1.getInfo();
electricCar1.startEngine();

