console.log("NODE js working. Русские символы");

var arr = [3,2,5];


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

map(arr, conLog);

var names = ['HTML', 'CSS', 'JavaScript'];

var arr2 = arr.map(function(i) {
    return i + 2;
});
//console.log(arr2);
// получили массив с длинами
//alert( nameLengths ); // 4,3,10