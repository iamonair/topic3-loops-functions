1. Написати функцію `compact()` яка має приймати на вхід масив, а на вихід має повертати значення нового масиву без повторень.
```js
const arr = [5, 3, 4, 5,6,7,3];
const arr2 = compact(arr);
console.log(arr2) ; // [5,3,4,6,7]
```
function compact(array) {
    const uniqueArray = [];  
    for (let i = 0; i < array.length; i++) {
        if (uniqueArray.indexOf(array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }  
    return uniqueArray;
}
  

2. Написати функцію `createArray(start, end)`, яка приймає на вхід 2 параметри: **початкове значення** та **кінцеве значення**, а на виході отримує масив із діапазоном цих значень (реалізувати достатньо лише із числовими значеннями).
```js
let arr = createArray(2, 9);
console.log(arr); // [2,3,4,5,6,7,8,9]
```
function createArray(start, end) {
    if (typeof start !== 'number' || typeof end !== 'number') {
        return "Початкове та кінцеве значення мають бути числами";
    }
    const result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}
  
3. Задані цілі числа **a** і **b** (**a < b**). Виведіть усі цілі числа від **a** до **b** включно, при цьому a виводится один раз, число **а+1** - два рази і т.д.

const a = parseInt(prompt("Введіть число a:"));
const b = parseInt(prompt("Введіть число b:"));
for (let i = a; i <= b; i++) {
    const repetitions = i - a + 1;
    for (let j = 0; j < repetitions; j++) {
        console.log(i);
    }
}

4. Напишіть функцію `randArray(k)`, яка заповнюватиме масив `k` випадковими цілими числами. Випадкові числа генеруються із діапазону **1-500**.
```js
randArray(5);  // [399,310,232,379,40]
```
function randArray(k) {
    const array = [];
    for (let i = 0; i < k; i++) {
        const randomNumber = Math.floor(Math.random() * 500) + 1;
        array.push(randomNumber);
    }
    return array;
}
  
5. Є масив `arr`, який може містити підмасиви, написати функцію `showByTypes` яка виведе у консоль масиви які складаються із примітивних даних початкового масиву і усіх вкладених масивів, але одного типу даних (не приводити тип **String** в **Number** навіть, якщо там лише число).
```js
let  arr = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
showByTypes(arr);
 /* 
[5, 12, 99, 2, 2, 4, 3]
["Limit", "a", "3", "33", "a", "text", "strong", "broun"]
*/
```
function separateArrayTypes(arr) {
    const numberArray = arr.filter(item => typeof item === 'number');
    const stringArray = arr.filter(item => typeof item === 'string');
    return [numberArray, stringArray];
}
  

6. Напишіть функцію `calc(a, b, op)`, яка виконує над числами `a` і `b` одну із арифметичних операцій та повертає її результат. Вид операції визначається цілим числом `op`:
**1** – _віднімання_,
**2** – _добуток_,
**3** – _ділення_,
**інші значення** – _додавання_.
```js
console.log(calc(5, 2, 2)) //10
```
function calc(a, b, op) {
    if (op === 1) {
        return a - b;
    } else if (op === 2) {
        return a * b;
    } else if (op === 3) {
        return a / b;
    } else {
        return a + b;
    }
}
  

7. Напишіть функцію `findUnique(arr)`, яка приймає масив `arr` і перевіряє на унікальність його елементи. Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне **true**, інакше - **false**.
```js
findUnique([1, 2, 3, 5, 3]);  // => false
findUnique([1, 2, 3, 5, 11]); // => true
```
function findUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          return false;
        }
      }
    }
    return true;
}

8. Створити функцію `create()`, яка приймає один аргумент у вигляді рядка. Ця функція повертає анонімну функцію, яка перевіряє чи переданий в неї аргумент збігається з аргументом зовнішньої функції.
```js
const tom = create("pass_for_Tom");
tom("pass_for_Tom"); //повертає true 
tom("pass_for_tom"); //повертає false
```
function create(externalPassword) {
    return function(inputPassword) {
        return inputPassword === externalPassword;
    }
}