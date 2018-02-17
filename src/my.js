console.log("NODE js working. Русские символы");
var arr = [3,2,5];
var names = ['HTML', 'CSS', 'JavaScript'];

function conLog(val, index, array) {
    console.log(val + 2, "index: " + index, array);
}


/*
 Задача 1:
 Напишите аналог встроенного метода forEach для работы с массивами
 */
function forEach(array, fn) {

    for (let i=0; i < array.length ; i++) {
        fn(array[i], i, array);

    }

}

//forEach(arr, conLog);

/*
 Задача 2:
 Напишите аналог встроенного метода map для работы с массивами
 */
function map(array, fn) {
    let newArr = [];
    for (let i=0; i < array.length ; i++) {
        newArr[i] = fn(array[i], i, array);

    }
    return newArr;
}

//map(arr, conLog);

/*
 Задача 3:
 Напишите аналог встроенного метода reduce для работы с массивами
 */

function sum(sum, val) {
    sum += val;
    console.log(sum, "val: " + val);
    return sum;
}

function reduce(array, fn, initial) {
    var result = initial;

    if (!initial) {
        result = array[0];
        i++
    }
    for (let i=0; i < array.length ; i++) {
        result = fn(result, array[i], i, i, array);
    }
    return result;
}


//console.log(reduce(arr, sum));

/*
 Задача 4:
 Функция принимает объект и имя свойства, которое необходиом удалить из объекта
 Функция должна удалить указанное свойство из указанного объекта
 */
function deleteProperty(obj, prop) {
    delete obj[prop];
    return obj;
}

var bomj = {
    name : "Danil",
    age: 28
}

console.log(deleteProperty(bomj, "name"));