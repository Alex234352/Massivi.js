
//Создайте массив d2 с числовыми величинами 45,78,10,3. Посчитайте в переменную sum2 сумму чисел в нем, при помощи цикла for .



// Создание объекта

//let userInfo = new Object(); // синтаксис "конструктор объекта"
//let userInfo = {};  // синтаксис "литерал объекта"
//*/

//-----------------
// Свойства объектов. Ключ + значение

//У каждого свойства есть ключ
//(также называемый «имя» или «идентификатор»).
//После имени свойства следует двоеточие ":",
//и затем указывается значение свойства.
//Если в объекте несколько свойств,
//то они перечисляются через запятую.

/*
let userInfo = {
	name: "Вася", // Свойство объекта
	age: 30, // Последняя (висячая) запятая
};

console.log(userInfo);
console.log(userInfo.name);
*/
//---------------------------------------------
// Имена свойств
/*
// Имя из двух и больше слов
let userInfo = {
	name: "Вася",
	age: 30,
	"likes javascript": true,
};
console.log(userInfo.name);
console.log(userInfo['name']);
console.log(userInfo["likes javascript"]);

*/
//-----------------
// Вычисляемое либо передаваемое имя
/*
// Вычисляем имя
let firstPart = "likes";
let userInfo = {
	name: "Вася",
	age: 30,
	[firstPart + " javascript"]: true,
};
console.log(userInfo["likes javascript"]);
*/
//-----------------
/*
// Передаем имя
let firstPart = "likes";
let userInfo = {
	name: "Вася",
	age: 30,
	[firstPart]: true,
};
console.log(userInfo[firstPart]);

// Преимущество квадратных скобок
//let key = "name";
//console.log(userInfo[key]);
*/
//-----------------
/*
// Зарезервированные слова в именах
let userInfo = {
	let: "Вася",
	for: 30,
};
console.log(userInfo.let);
console.log(userInfo.for);
*/
//-----------------
/*
// Имена = строки либо символы

let userInfo = {
	0: "Вася", // 0 тоже самое что "0"
};
console.log(userInfo[0]);
console.log(userInfo["0"]);
*/
//-----------------

/*
// Тип данных Symbol

// Создаём символ id с описанием (именем) "id"
let id = Symbol("id");
let userInfo = {
	name: "Вася",
	age: 30,
	[id]: "Некое значение"
};
console.log(userInfo);

// Основное применение символов:
// 1.«Скрытые» свойства объектов
//		Символьное свойство не появится в for..in
// 2. Использование системных символов
// 	Symbol.iterator, Symbol.toPrimitive и т.д.
*/
//---------------------------------------------
// Вложенность
/*
let userInfo = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	}
}
console.log(userInfo);
console.log(userInfo.address);
console.log(userInfo.address.city);
*/

//---------------------------------------------
/*
// Свойство из переменной

function makeUserInfo(name, age) {
	return {
		name: name,
		age: age,
		// ...другие свойства
	};
}
let user = makeUserInfo("Вася", 30);
console.log(user);
*/
//------------------
/*
function makeUserInfo(name, age) {
	return {
		name, // Тоже самое что и  name: name,
		age,// Тоже самое что и  age: age,
		"likes javascript": true,
		// ...другие свойства
	};
}
let user = makeUserInfo("Вася", 30);
console.log(user);
*/
//---------------------------------------------
// Изменение объекта
/*
// Добавление свойства
let userInfo = {
	name: "Вася",
}

console.log(userInfo);

userInfo.age = 30;

console.log(userInfo);

userInfo['likes javascript'] = true;

console.log(userInfo);

userInfo.address = {
	city: "Uzhhorod",
	street: "Freedom",
};

console.log(userInfo);
*/
//------------------
/*
// Удаление свойства

let userInfo = {
	name: "Вася",
	age: 30,
	"likes javascript": true
}
console.log(userInfo);

delete userInfo.age;

console.log(userInfo);

delete userInfo["likes javascript"];

console.log(userInfo);

*/
//------------------
// Изменение свойства
/*
let userInfo = {
	name: "Вася",
	age: 30,
}
console.log(userInfo);

userInfo.age = 18;

console.log(userInfo);
*/

//------------------
/*
// Изменение свойства даже в константе

const userInfo = {
	name: "Вася",
	age: 30,
}
console.log(userInfo);

userInfo.age = 18;

console.log(userInfo);
*/

//---------------------------------------------

/*
// Копирование объектов

// При копировании объекта в другую переменную
// сам объект не дублируется, а копируется только ссылка на него

let userInfo = {
	name: "Вася",
	age: 30,
}

console.log(userInfo);

let user = userInfo;

console.log(user);

user.age = 18;

console.log(userInfo);
*/

//-------------------

// Дублирование объектов (Object.assign)

// Синтаксис
//Object.assign(куда(объект), что(свойство #1), что(свойство #2), ...);
/*
let userInfo = {
	name: "Вася",
	age: 30,
}

let user = Object.assign({}, userInfo);

user.age = 18;

console.log(userInfo);
console.log(user);
*/
//-------------------
/*
// Еще про Object.assign

let userInfo = {
	name: "Вася",
	age: 30,
}
Object.assign(userInfo, { ['likes javascript']: true, city: "Uzhhorod" });
console.log(userInfo);
*/

//---------------------------------------------
// Проверка существования свойства
/*
let userInfo = {
	name: "Вася",
	age: 30,
}
//console.log(userInfo.age);

if (userInfo.age) { // true или false
	console.log(userInfo.age);
}
*/
//--------------------
// Опциональная цепочка
/*
let userInfo = {
	name: "Вася",
	age: 30,
	//address: {
	//	city: "Uzhhorod",
	//	street: "Freedom",
	//}
}
//console.log(userInfo.address.street);
console.log(userInfo?.address?.street);

*/
//--------------------
// Оператор "in"
/*
let userInfo = {
	//name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	}
}
if ("name" in userInfo) {
	console.log(userInfo.name);
}
*/
//--------------------

//В большинстве случаев сработает сравнение с undefined.
//либо опциональная цепочка ?.
//Но есть особый случай, когда свойство существует, 
//но содержит значение undefined. 
//В этом случае необходимо использовать "in".

/*
let userInfo = {
	name: undefined,
	// ...следующие свойства
}
if (userInfo.name) { // false
	console.log(userInfo.name);
}
if ("name" in userInfo) { //true
	console.log(userInfo.name);
}
*/

//---------------------------------------------

// Цикл «for…in»
/*
// Для перебора всех свойств объекта используется цикл for..in.
// Этот цикл отличается от изученного ранее цикла for(;;).

for (let key in object) {
	// тело цикла выполняется для каждого свойства объекта
}
*/

//-----------

/*
let userInfo = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	}
}

for (let key in userInfo) {
	// ключи
	console.log(key); // name, age, address
	// значения ключей
	console.log(userInfo[key]); // Вася, 30, Object {}
}

for (let key in userInfo.address) {
	// ключи
	console.log(key); // city, street
	// значения ключей
	console.log(userInfo.address[key]); // Uzhhorod, Freedom
}*/

//---------------------------------------------
// Методы объекта
/*
let userInfo = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	},
	//showInfo: function () {
	//	console.log(`${userInfo.name}, ${userInfo.age} лет. Адрес: г.${userInfo.address.city}, ул.${userInfo.address.street}`);
	//}
	showInfo() {
		console.log(`${userInfo.name}, ${userInfo.age} лет. Адрес: г.${userInfo.address.city}, ул.${userInfo.address.street}`);
	}
}
userInfo.showInfo();
*/

//----------------------
// Использование "this"
/*
let userInfo = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	},
	showInfo() {
		//console.log(`${userInfo.name}, ${userInfo.age} лет. Адрес: г.${userInfo.address.city}, ул.${userInfo.address.street}`);
		console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}`);
	}
}
userInfo.showInfo();
*/
//----------------------

/*
let userInfo = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	},
	showInfo() {
		//function show() {
		//	console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}`);
		//}

		// У стрелочной функции нет своего "this" используются
		// значение из внешнего метода userInfo.showInfo()
		let show = () => console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}`);
		show();
	}
}
userInfo.showInfo();
*/
//----------------------
// Преимущество "this"
/*
let userInfo = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	},
	showInfo() {
		console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}`);
		//console.log(`${userInfo.name}, ${userInfo.age} лет. Адрес: г.${userInfo.address.city}, ул.${userInfo.address.street}`);
	}
}
userInfo.showInfo();

let user = userInfo;
userInfo = null;
user.showInfo();
*/
//---------------------------------------------

// Функция-конструктор

/*
Обычный синтаксис создания объекта{... } позволяет создать
только один объект. Но зачастую нам нужно создать множество
однотипных объектов, таких как пользователи, элементы меню и т.д.
Это можно сделать при помощи функции - конструктора и оператора "new".
*/
/*
Функции - конструкторы являются обычными функциями.
Но есть два правила:
1. Имя функции - конструктора должно начинаться с большой буквы.
2. Функция - конструктор должна вызываться при помощи
	оператора "new".
*/
/*
function UserInfo(name) {

	// this = {}; Создается пустой объект (неявно)

	this.name = name;
	this.age = 30;

	// return this; Возвращается объект (неявно)
}

console.log(new UserInfo('Вася'));
console.log(new UserInfo('Лена'));
*/

/*
Когда мы пишем наш код, используя объекты для представления сущностей реального мира,
– это называется объектно - ориентированное программирование или сокращённо: «ООП».

ООП является большой предметной областью и интересной наукой само по себе.
Как выбрать правильные сущности ? Как организовать взаимодействие между ними ?
Это – создание архитектуры, и есть хорошие книги по этой теме,
такие как «Приёмы объектно - ориентированного проектирования.
Паттерны проектирования» авторов Эрих Гамма, Ричард Хелм, Ральф Джонсон,
Джон Влиссидес или «Объектно - ориентированный анализ и проектирование с примерами приложений»
Гради Буча, а также ещё множество других книг.
*/

//========================================================================================================================================================
//========================================================================================================================================================

//ДОМАШКА
/*
1. Изучить теорию
2. Решить задачи:
*/
/*
// Задача №1 (верна ли запись)
const userInfo = {
	name: "Вася"
	age: 30
}

// Задача №2 (что будет в консоли?)
let userInfo = {
	name: "Вася",
	age: 30,
	"58": 'Значение свойства'
}
console.log(userInfo[58]);

// Задача №3 (что будет в консоли?)
let userInfo = {
	name: "Вася",
	age: 30
}
let user = userInfo;
user.age = 45;

console.log(userInfo.age);

// Задача №4 (что будет в консоли?)
let userInfo = {
	name: "Вася",
	age: 30,
	showInfo() {
		console.log(`${this.name}`);
	}
}
let user = userInfo;
userInfo = null;
user.showInfo();

// Задача №5 (что будет в консоли?)
let userInfo = {
	name: "Вася",
	age: 30,
}
for (const key in userInfo) {
	const value = userInfo[key];
	console.log(value);
}

// Задача №6 (что будет в консоли?)
let userInfo = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod"
	}
}
for (const key in userInfo.address) {
	console.log(userInfo.address[key]);
}

// Задача №7 (верна ли запись)
const userInfo = {
	name: "Вася",
	age: 30,
	"likes js": true
}
console.log(userInfo."likes js");
*/
// Задача №8
/*
1.Создайте пустой объект userInfo.
2.Добавьте свойство name со значением Вася.
3.Добавьте свойство age со значением 30.
4.Измените значение свойства name на Лена.
5.Удалите свойство name из объекта.
*/

Примеры

let user = {
	name: "John",
	age: 30
};

let key = prompt("Что вы хотите узнать о пользователе?", "name");

// доступ к свойству через переменную
alert(user[key]); // John (если ввели "name")



function makeUser(name, age) {
	return {
		name: name,
		age: age
		// ...другие свойства
	};
}

let user = makeUser("John", 30);
alert(user.name); // John




let user = { name: "John", age: 30 };

alert("age" in user); // true, user.age существует
alert("blabla" in user); // false, user.blabla не существует



let user = {
	name: 'John',
	surname: 'Smith',
}
user.name = 'Pete';
delete user.name;
console.log(user[key]);

Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
Должно работать так:

let schedule = {};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // false


let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130
}
let sum = 0;
for (let key in salaries) {
	sum += salaries[key];
}



let menu = {
	width: 200,
	height: 300,
	title: "My menu"
};
function multiplyNumeric(obj) {
	for (let key in obj) {
		if (typeof obj[key] == 'number') {
			obj[key] *= 2;
		}
	}
}

function multiplyNumerShow(obj) {
	for (let key in obj) {
		if (typeof obj[key] == 'number') {
			alert('$obj[key]')
		}



		// primer iz knigi 1 

		var taxi = {
			make: 'Webwille Motors',
			model: 'Taxi',
			year: '1955',
			color: 'yellow',
			passengers: 4,
			convertible: false,
			mileage: 5000,
		};

		function prequal(taxer) {
			if (taxer.mileage > 10000) {
				return false;
			} else if (taxer.year > 1960) {
				return false;
			}
			return true;
		}

		var worthALook = prequal(taxi);
		if (worthALook) {
			console.log('You gotta check out this ' + taxi.make + '' + taxi.model);
		} else {
			console.log('You should really pass on the ' + taxi.make + '' + taxi.model);
		}


		// primer iz knigi 2

		function getSecret(file, secretPassword) {
			file.opened = file.opened + 1;
			if (secretPassword == file.password) {
				return file.contests;
			}
			else {
				return 'text'
			}
		}
		function setSecret(file, secretPassword, secret) {
			if (secretPassword == file.password) {
				file.opened = 0;
				file.contests = secret;
			}
		}

		var superSecretFile = {
			level: 'classified',
			opened: 0,
			password: 2,
			contests: 'Dr. Evels next meeting in Hell.'
		};
		var secret = getSecret(superSecretFile, 2);
		console.log('secret');

		setSecret(superSecretFile, 2, 'Dr Evels next meeting in Paradise');
		secret = getSecret(superSecretFile, 2);
		console.log('secret');




		// калькулятор

		let calculator = {
			sum() {
			  return this.a + this.b;
			},
		 
			mul() {
			  return this.a * this.b;
			},
		 
			read() {
			  this.a = +prompt('a?', 0);
			  this.b = +prompt('b?', 0);
			}
		 };
		 
		 calculator.read();
		 alert( calculator.sum() );
		 alert( calculator.mul() );

// шаги

		 let ladder = {
			step: 0,
			up() {
			  this.step++;
			  return this;
			},
			down() {
			  this.step--;
			  return this;
			},
			showStep() {
			  alert( this.step );
			  return this;
			}
		 }
		 
		 ladder.up().up().down().up().down().showStep(); // 1

// непонятно куда ссылается this

		 function User(name) {
			this.name = name;
			this.isAdmin = false;
		 }
		 
		 let user = new User("Вася");
		 
		 alert(user.name); // Вася
		 alert(user.isAdmin); // false


		 // калькулятор глобальный
		 \
		 afunction Calculator() {

			this.read = function() {
			  this.a = +prompt('a?', 0);
			  this.b = +prompt('b?', 0);
			};
		 
			this.sum = function() {
			  return this.a + this.b;
			};
		 
			this.mul = function() {
			  return this.a * this.b;
			};
		 }
		 
		 let calculator = new Calculator();
		 calculator.read();
		 
		 alert( "Sum=" + calculator.sum() );
		 alert( "Mul=" + calculator.mul() );

		 /*
1.Создайте пустой объект userInfo.
2.Добавьте свойство name со значением Вася.
3.Добавьте свойство age со значением 30.
4.Измените значение свойства name на Лена.
5.Удалите свойство name из объекта.
*/


let userInfo = {};
userInfo.name= 'Vasya';
userInfo.age = '30';
userInfo.name= 'Lena';
delete userInfo.name;
console.log(userInfo);

    

// случайный набор машин

function makeCar () {
	var makes = ['Chevy', 'GM', 'Fiat' , 'Webwille Motors' , 'Tucker'];
	var models = [ 'Cadillac' , '500' , 'Bel-Air' , 'Taxi' , 'Torpedo'];
	var years = [ 1955 , 1957 , 1948 , 1954 , 1961 ];
	var colors = ['red' , 'blue' , 'tan' , 'yellow' , 'white'];
	var conertible = [ true, false ];
 
	var rand1 = Math.floor(Math.random() * makes.length );
	var rand2 = Math.floor(Math.random() * models.length );
	var rand2 = Math.floor(Math.random() * years.length );
	var rand2 = Math.floor(Math.random() * colors.length );
	var rand2 = Math.floor(Math.random() * 5) +1 ;
	var rand3 = Math.floor(Math.random () * 2);

	var car = {
make:makes [rand1],
model:models [rand2],
year: years [rand3],
color: colors [rand4],
passengers : rand5,
convertible: convertible[rand6],
mileage: 0
 };
 return car;
	}
	function displayCar(car) {
		console.log ('Your new car is a ' + car.year + '' + car.make + '' + car.model);
	}

	var carToSell = makeCar();
	displayCar(carToSell);


// 

var eightBall = { index: 0,
advice : ['yes' , 'no', 'maybe', 'not a chance'],
shake: function() {
	this.index=this.index + 1 ;
	if (this.index >= this.advice.length) {
		this.index=0;
	}
},
look:function() {
	return this.advice[this.index];
 }
 };
 eightBall.shake();
 console.log(eightBall.look());




// 

var fiat = { 
	make: "Fiat",
	model: "500",
	year: 1957, 
	color: "Medium Blue",
	passengers: 2,
	convertible: false,
	mileage: 88000,
	started: false,
	fuel: 0, 
	start: function() {
		if	(this.fuel == 0) { 
		alert ('Pojdesh peshkom domoj, mashina ne zapravlena');
	} else {
		this.started=true;
	}
	},
	stop: function() {
		this.started = false;
	},
	drive: function() {
		if (this.started) {
			if (this.fuel > 0) { 
			alert(this.make + " " + 
			      this.model + " goes zoom zoom!");
					this.fuel = this.fuel-1;
		 } else { 
			 alert('Uh oh,out of fuel.');
		    this.stop();
		 }
		} else {
			alert("You need to start the engine first.");
			this.stop();
		}
	},
	addFuel : function(amount) {
		this.fuel = this.fuel + amount;
	}
};




fiat.start();
fiat.drive();
fiat.addFuel(2);
fiat.start();
fiat.drive();
fiat.drive();
fiat.drive();
fiat.stop();



let obj = {
	count : 3 ,
	number : 5
	};
	
	
	function sum (parametr) {
	 
	let freeSum = 1;
	let arr = [];
	for ( let i=1; i<=parametr.count; i++ ) {
	/* freeSum += i
	freeSum *= i; */
	freeSum = freeSum * parametr.number;
	arr.push(freeSum);
	} 
	return arr;
	}
	let funcresult = sum(obj)
	const divEl = document.createElement('div')
	divEl.innerHtml = funcresult
	alert(sum(obj))
	alert("Hello")



	// OBJECT.assign ДУБЛИРОВАНИЕ обьекта //
	
	let user = {
		name: 'Alex',
		age : 30,
	};

	let clone = {};

	for (let key in user) {
		user[key] = clone[key];
	}

	alert (clone.name);
	
	
	// Object.assign(dest, [src1, src2, src3...])


	let user = {
		name: "Igor",
		age : 50,
		sex: 'men'
	};

	let name1 = {
		surName : 'Ivanova',
		statuce : ['not married'],
	}
	let name3 = {
		surName : ['Boris Ivanova'],
		statuce : ['not married'],
	}

	Object.assign(user, name1, name3);

	document.write(user.surName);

// THIS СТУПЕНЬКИ) //


let ladder = {
	step:0,
	up () {
		this.step ++;
		return this;
	},
	down () {
		this.step--;
		return this;
	},
	showStep () {
      alert (this.step);
		return this;
	}
};
	ladder.up();
	ladder.down();
	ladder.down();
	ladder.showStep();
//ILI TAK 
	ladder
	.up()
	.up()
	.down()
	.up()
	.down()
	.showStep();
 
}

// YURA 1 vopros!!!!!

function calculator2() {

	this.read = function() {
	  this.a = +prompt('a?', 0);
	  this.b = +prompt('b?', 0);
	};
 
	this.sum = function() {
	  return this.a + this.b;
	};
 
	this.mul = function() {
	  return this.a * this.b;
	};
 }
 
 let calculator = calculator2();
 calculator.read();
 
 alert( "Sum=" + calculator.sum() );
 alert( "Mul=" + calculator.mul() );


// YURA 2 vopros!!!!!//

function Accumulator(startingValue) {
	this.value = startingValue;
 
	this.read = function() {
	  this.value += +prompt('Сколько нужно добавить?', 0);
	};
 
 }
 
 let accumulator = new Accumulator(1);
 accumulator.read();
 accumulator.read();
 alert(accumulator.value);

// MOE RESHENIE

function Accumulator(startingValue) {
	this.value = startingValue;
 
	this.read = function() {
	  prompt('Сколько нужно добавить?', 0);
	  this.value = this.value + this.read;
		};
 
 }
 
 let accumulator = new Accumulator(1);
 accumulator.read();
 accumulator.read();
 alert(accumulator.value);


