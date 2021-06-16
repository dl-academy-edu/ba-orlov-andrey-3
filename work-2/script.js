var task1 = document.querySelector('.task1');
var task2 = document.querySelector('.task2');
var task3 = document.querySelector('.task3');
var task4 = document.querySelector('.task4');
var task4_2 = document.querySelector('.task4_2');
var task4_3 = document.querySelector('.task4_3');
var task5 = document.querySelector('.task5');

task1.addEventListener('click', function() {
	let x = +prompt('Введите число: ');
	for (let i = 1; i <= x; i++){
		if (i % 4 === 0) continue;
		console.log(i);
	}
})

task2.addEventListener('click', function() {
	let x = +prompt('Введите число: ');
	let fact = 1;
	while (x > 0) {
		fact *= x; 
		x--;
		}
	alert(fact);
	console.log(fact);

})

task3.addEventListener('click', function() {
	let x = +prompt('Введите число: ');
	let y = +prompt('Введите степень: ');
	let z = 1;
	for (y; y > 0; y--) z *= x;
	alert(z);
})

task4.addEventListener('click', function() {
	let sx = prompt(': ',1);
	let x =+ sx;
	while  (x !== x || sx === null || !sx.length){
	sx = prompt('Вы допустили ошибку при вводе числа. Попробуйте еще раз: ');
	x =+ sx;
	}
	for (let i = 1; i <= x; i++){
	if (i % 4 === 0) continue;
	console.log(i);
	}
})
task4_2.addEventListener('click', function() {
	let sx = prompt('Факториал числа: ');
	let x =+ sx;
	while  (x !== x || sx === null || !sx.length){
	sx = prompt('Вы допустили ошибку при вводе числа. Попробуйте еще раз. Факториал числа: ');
	x =+ sx;
	}	
	
	let fact = 1;
	while (x > 0) {
		fact *= x; 
		x--;
		}
	alert(fact);
	console.log(fact);

})

task4_3.addEventListener('click', function() {
	let sx = prompt('Введите число: ');
	let x =+ sx;
	while  (x !== x || sx === null || !sx.length){
	sx = prompt('Вы допустили ошибку при вводе числа. Попробуйте еще раз. : ');
	x =+ sx;
	}	
	let sy = prompt('Введите степень: ');
	let y =+ sy;
	while  (y !== y || sy === null || !sy.length){
	sy = prompt('Вы допустили ошибку при вводе числа. Попробуйте еще раз. Введите степень: ');
	y =+ sy;
	}	
	
	let z = 1;
	for (y; y > 0; y--)
		z *= x;
	alert(z);
})

task5.addEventListener('click', function() {
	let rand = Math.floor(1 + Math.random() * 10);
	let sx = prompt(`Введите число [1..10][Подсказка: ${rand}]: `);
	console.log(`[${rand}]: ${sx}`);
	let x =+ sx;
	if (x !== rand)
		while (true) {
			sx = prompt(`Неверно. Введите число[1..10][Подсказка: ${rand}]: `);
			console.log(`[${rand}]: ${sx}`);
			x =+ sx;
			if (x === rand) {break;}
		}
	alert(`Вы победили. это ${rand}`);
})




