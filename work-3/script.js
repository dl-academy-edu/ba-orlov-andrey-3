var task1 = document.querySelector('.task1');
var task20 = document.querySelector('.task20');
var task21 = document.querySelector('.task21');
var task22 = document.querySelector('.task22');
var task23 = document.querySelector('.task23');
var task3 = document.querySelector('.task3');
var task4 = document.querySelector('.task4');

//***************************************************** задача 1
task1.addEventListener('click', function() {
	function getAge(onReject=()=>{console.log(` неподходящий возраст`)}) {
		let ageStr = prompt('Введите свой возраст: ');
		let age = +ageStr;
		if (validateNumber(age) && validateStr(ageStr) && age>=18) {
			alert('Успешно');
			return age;
		}
		onReject && onReject();
		return getAge();
	}
	console.log(getAge());	
})

function validateStr(string) {
	return typeof string === 'string' && string.length;
}

function validateNumber(number) {
	return typeof number === 'number' && number===number;
}	

//************************************************** задача 2
task20.addEventListener('click', function() {
	function add(a, b) {
		return a + b;
	}
	console.log(add(88,2));
	/*
	1) Не имеет побочных эффектов
	(вывод на экран, http-методы);
	2) С одинаковыми аргументами
	всегда возвращает одинаковое
	значение;
	3) Не пишет и не читает глобальные
	переменные (переменные,
	которые видны везде);
	4) Не изменяет состояние
	приложения (ничего не выводит
	на экран)
	*/
})

task21.addEventListener('click', function() {
	function subtract(a, b) {
		return a - b;
	}
	console.log(subtract(88,2));
})

task22.addEventListener('click', function() {
	function divide(a, b) {
		return a / b;
	}
	console.log(divide(88,2));
})

task23.addEventListener('click', function() {
	function multiply(a, b) {
		return a * b;
	}
	console.log(multiply(88,2));
})


//********************************************** задача 3
task3.addEventListener('click', function() {
	const add = addCreator(5);
	console.log(add(5));//  10
	console.log(addCreator(1)(3));	//	4	
})

function addCreator(start) {
	let index = start;
	return function (step=0) {
		index += step;
		return index;
	}		
}

//************************************************ задача 4
task4.addEventListener('click', function() { 
 const greatcounter = counterCreator(100);
 console.log(greatcounter());//100
 console.log(greatcounter());//200
 console.log(greatcounter());//300
})

function counterCreator(step=2) {
	let index = 0;
	return function () {
		index += step;
		return index;
	}		
}
//*************************************************

