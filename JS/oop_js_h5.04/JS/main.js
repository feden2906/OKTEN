- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
-- info () - яка виводить всю інформацію про автомобіль
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
let human = {
    name: 'Vasyl Stepanovych',
    head: true,
    body: true,
    hat: 'kepka',
    occupation: 'driver',
    experience: 12
};
let nextGeneration = 2017;


function Car (model, maker, year, maxS, engine) {
    this.model = model;
    this.maker = maker;
    this.yearIssue = year;
    this.maxSpeed = maxS;
    this.engine = engine;
    this.drive = function () {
        console.log(`I am driving with ${this.maxSpeed} km/h`)
    }
    this.info = function () {
        console.log(`model:${this.model}, manufacture:${this.maker}, year of issue:${this.yearIssue}, max speed:${this.maxSpeed}, engine capacity:${this.engine}`);
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    }
    this.changeYear = function (newValue) {
        this.yearIssue = newValue;
    }
    this.addDriver = function (anybody) {
        this.driver = anybody;
    }
}

let honda = new Car('accord', 'Honda', 2015, 260, 2.4);
honda.drive();
honda.info();
honda.increaseMaxSpeed(10);
honda.changeYear(nextGeneration);
honda.addDriver(human);
console.log(honda);
**********************************************************************

- Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник,
рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
-- info () - яка виводить всю інформацію про автомобіль
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
let human = {
    name: 'Vasyl Stepanovych',
    head: true,
    body: true,
    hat: 'kepka',
    occupation: 'driver',
    experience: 12
};

let nextGeneration = 2007;

class Car {
    constructor(model, maker, year, maxS, engine) {
        this.model = model;
        this.maker = maker;
        this.yearIssue = year;
        this.maxSpeed = maxS;
        this.engine = engine;

    }

    drive() {
        console.log(`I am driving with ${this.maxSpeed} km/h`)
    }

    info() {
        console.log(`model:${this.model}, manufacture:${this.maker}, year of issue:${this.yearIssue}, max speed:${this.maxSpeed}, engine capacity:${this.engine}`);
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear(newValue) {
        this.yearIssue = newValue;
    }

    addDriver(anybody) {
        this.driver = anybody;
    }
}

let subaru = new Car('Legacy', 'Subaru', 2006, 220, 2.0);
subaru.info();
console.log(subaru);

*************************************************************************
-створити класс попелюшка з полями ім'я, вік, розмір ноги
--Створити 10 попелюшок , покласти їх в масив
--Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
-- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Cinderella extends Human {
    constructor(name, age, footSize) {
        super(name, age);
        this.footSize = footSize;
    }
}

class Prince extends Human {
    constructor(name, age, item) {
        super(name, age);
        this.bestSize = item;
    }
}

let cinderellas = [
    new Cinderella('Polya', 20, 37),
    new Cinderella('Tasha', 19, 38),
    new Cinderella('Marry', 21, 38),
    new Cinderella('Tanya', 19, 37),
    new Cinderella('Sonya', 23, 40),
    new Cinderella('Kira', 22, 39),
    new Cinderella('Cindy', 18, 36),
    new Cinderella('Lana', 18, 37),
    new Cinderella('Zera', 26, 39),
    new Cinderella('Naomi', 18, 37)
];

let prince = new Prince('Boris', 24, 36);

for (let cinderella of cinderellas) {
    if (prince.bestSize === cinderella.footSize) {
        console.log(`Father, I have found my bride finally.
        her name is ${cinderella.name}`);
    }
}

***********************************************************
-створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
--Створити 10 попелюшок , покласти їх в масив
--Сторити об'єкт типу "принц" за допомоги функції конструктора з полями
ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
-- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
let prince = new Human('Boris', 26);
let cinderellas = [
    new Human('Polya', 20, 37),
    new Human('Tasha', 19, 38),
    new Human('Marry', 21, 38),
    new Human('Tanya', 19, 37),
    new Human('Sonya', 23, 40),
    new Human('Kira', 22, 39),
    new Human('Cindy', 18, 36),
    new Human('Lana', 18, 37),
    new Human('Zera', 26, 39),
    new Human('Naomi', 18, 37)
];

function Human(name, age, size) {
    this.name = name;
    this.age = age;
    this.footSize = size;
    this.findBride = function (candidate) {
        for (let cinderella of cinderellas) {
            if ( cinderella.footSize === 36) {
                console.log(`Father, I have found my bride finally. [[
        her name is ${cinderella.name}`);
            }
        }
    }
}
console.log(prince.findBride(cinderellas));