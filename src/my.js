console.log("NODE js working. Русские символы");

/*
 Задача 1:
 Напишите аналог встроенного метода forEach для работы с массивами
 */

var arr = [3,2,5];


function forEach(array, fn) {

    for (let i=0; i < array.length ; i++) {
        fn(array[i], i, array);

    }

}


function conLog(val, index, array) {
    console.log(val + 2, "index: " + index, array);
}


forEach(arr, conLog);

