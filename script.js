//1)Создайте три переменные. Присвойте первой переменной числовое значение. Вторая переменная равна первой переменной, увеличенной в три раза. Третья переменная равна сумме двух первых. Выведите на экран все три.

let first = 10;
let second = first * 3;
let third = first + second;
alert(first);
alert(second);
alert(third);


//2)Создайте переменные firstName и lastName для хранения имени и фамилии, запишите в них значения из модального окна prompt. Выведите на экран приветствие “What’s up (firstName) (lastName)”.

let firstName = prompt('Name');
let lastName = prompt('Surname');
alert('What’s up ' +  firstName + ' ' + lastName + '?');


//3)Создайте переменные x и y для хранения числа. Значения переменные получают из prompt. Рассчитайте произведение, частное, разность и сумму этих значений. Результат последовательно отобразите в модальном окне.

let x;
let y;

do {
    x = +prompt('Please enter first number');
    console.log(x);
    if(isNaN(x)){
        alert('You enter not a number, please try again');
        console.log('You enter not a number, please try again');
    }
}
while (isNaN(x));

do {
    y = +prompt('Please enter second number');
    console.log(y);
    if(isNaN(y)){
        alert('You enter not a number, please try again');
        console.log('You enter not a number, please try again');
    }
}
while (isNaN(y));

let mul = x*y;
let div = x/y;
let sub = x-y;
let add = x+y;
alert('multiplication: ' + mul);
alert('division: ' + div);
alert('subtraction ' + sub);
alert('addition: ' + add);


//4)// Напишите в переменных формулу для расчета з/п за июль с учетом, что количество рабочих часов, количество рабочих дней в неделе и рейт за час – значения читаются из prompt. (Просчитывать какой это месяц, 30 или 31 день не нужно).

let numHour = prompt('Number of working hours');
let numDay = prompt('Number of working days per week');
let rate = prompt('Rate per hour ($)');
const weekRatio = 4.3;

let sum = numHour * numDay * rate * weekRatio;

alert(sum);


//5)Напишите программу, которая определяет, является ли число, введенное пользователем, нечётным.

//1 Option
let num = prompt('Please enter number');
if (num %2===0 ) {
    alert('even');
}
else{
    alert('not even');
}


//2 Option

let num = prompt('Please enter number');
if (num %2===0 ) {
    alert('false');
}
else{
    alert('true');
}


//6)Напишите программу, которая проверяет является ли значение, введенное пользователем, числом.

let val
do {
    val = +prompt('Please enter value');
    console.log(val);
    if(isNaN(val)){
        alert('You enter not a number, please try again');
        console.log('You enter not a number, please try again');
    }
}
while (isNaN(val));
alert('great, you entered the number!');


//7)Запишите в переменную случайное число (Math.random()), умножьте его на 100 и округлите. Получите второе число из окна prompt. Сравните и отобразите в модальном окне: первое число меньше второго или нет, а также оба значения.
//1)
let firstNum = Math.random();
console.log(firstNum);
firstNum=Math.round(firstNum*100);
// 2)
let firstNum = Math.floor(Math.random()*100);
let secondNum = prompt('Please enter number');
let result = firstNum < secondNum ;
alert(result);

console.log(firstNum);
console.log(secondNum);
console.log(result);


//8)Создайте переменную str и запишите в нее из prompt такое предложение «Мне нравится изучать Front-end». Также создайте еще одну переменную и запишите в нее из prompt то, что вам нравится изучать. С помощью методов строки определите существует ли то что вам нравится изучать в исходной строке str. Также возьмите подстроку «Мне нравится изучать » из исходной переменной str сохраните ее в отдельной переменной. Создайте еще одну переменную result куда запишите результирующую строку объединяющую «Мне нравится изучать » и то что вам нравится изучать (примените для этого обратные кавычки ` `). Отобразите результат в модальном окне.

let str1 = prompt('Message', 'Мне нравится изучать Front-end'); //записываем в переменную из prompt-«Мне нравится изучать Front-end»
let  str2 = prompt("Message", 'Front-end'); //записываем в переменную из prompt то, что нам нравится изучать-«Front-end»
let isInclude = str1.includes(str2);
let index = str1.indexOf("Front-end");
let str3 =str1.substring(0, index);
let result = `${str3}` + `${str2}`;
alert(result);
console.log(isInclude);
console.log(str3);
