// 1. Напишіть функцію, що повертає куб числа.

// function toThreePower(number) {

// 	return Math.pow(number, 3);

// }

// console.log(toThreePower(3));

// 2. Напишіть функцію, що додає перше число до другого і ділить результат на третє число.

	// function threeNumbers(a, b, c) {
	// 	return (a+b)/c;
	// }

	// console.log(threeNumbers(10, 20, 3));

// 3. Напишіть функцію, що приймає число від 1 до 7 і повертає відповідну назву дня (українською).

	// function dayOfWeek(number) {
	// 	if (number > 0 && number <= 7 ) {
	// 		switch (number) {
	// 			case 1: return "Monday";
	// 			case 2: return "Tuesday";
	// 			case 3: return "Wednesday";
	// 			case 4: return "Thursday";
	// 			case 5: return "Friday";
	// 			case 6: return "Saturday";
	// 			case 7: return "Sunday";
	// 		}
	// 	}
	// }
 // 	console.log(dayOfWeek(4));
// 4. Реалізуйте функцію знаходження факторіала

	// function factorial( number ) {
	// 	let n = 1;
	// 	if (number != 0) {
	// 		for (let i = 1; i <= number; i++) {
				
	// 			n = n * i;
	// 		}
	// 		return n;
	// 	}	
	// 	else {
	// 		return 1;
	// 	}
	// } 

	// console.log(factorial(4));
// 5.  Напишіть функцію яка отримує години хвилини та секунди і повертає це число в секундах.

	// function seconds(a, b, c) {
	// 	return a*3600 + b*60 + c;
	// }

	// console.log(seconds(0,5,7));

// 6.    Написати функцію , яка приймає секунди, і перетворює їх у години хвилини та секунди у форматі «гг:хх:сс». якщо кількість годин більша за 23.59.59 - вивести повідомлення "Більше одного дня". 

	// function whatHour(num) {

	// 	let hour = Math.floor(num / 3600);
	// 	let remainder = num % 3600;
	// 	let minutes = Math.floor(remainder / 60);
	// 	let seconds = remainder % 60;

	// 	return `${hour}:${minutes}:${seconds}`;
	// }

	// console.log(whatHour(4000));

// 7. 4 відмінності ерров фанкшина від звичайної функції.

// 1. Значення this в aroowFunction відсутнє, вона його підтягує із зовнішньої функції
// 2. Наявність return. А якщо в arrowFunction є тільки одна операція і опустити фігурні душки, то автоматично повернеться дана операція
// 3. Звичайні function можуть використовуватись для створення об'єктів, а от arrowFunction ні, тому що не модуть оперувати значенням this
// 4. arrowFunction не має масиву аргументів arguments, який є в function