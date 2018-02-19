/* ДЗ 3 - работа с массивами и объеектами */

/*
 Задача 1:
 Напишите аналог встроенного метода forEach для работы с массивами
 */
function forEach(array, fn) {
    for (let i=0; i < array.length ; i++) {
        fn(array[i], i, array);
    }
}

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

/*
 Задача 3:
 Напишите аналог встроенного метода reduce для работы с массивами
 */
function reduce(array, fn, initial) {

    var result = initial;
    var i = 0;

    if (!initial) {
        result = array[0];
        i++
    }

    for (i; i < array.length ; i++) {
        result = fn(result, array[i], i, array);
    }

    return result;
}
/*
 Задача 4:
 Функция принимает объект и имя свойства, которое необходиом удалить из объекта
 Функция должна удалить указанное свойство из указанного объекта
 */
function deleteProperty(obj, prop) {
    delete obj[prop];
    return obj;
}

/*
 Задача 5:
 Функция принимает объект и имя свойства и возвращает true или false
 Функция должна проверить существует ли укзаанное свойство в указанном объекте
 */
function hasProperty(obj, prop) {
    if (obj.hasOwnProperty(prop)) return true
    else return false
}

/*
 Задача 6:
 Функция должна получить все перечисляемые свойства объекта и вернуть их в виде массива
 */

function getEnumProps(obj) {
    return Object.keys(obj)
}
/*
 Задача 7:
 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистра и вернуть в виде массива
 */
function upperProps(obj) {
    var names = Object.keys(obj);
    for (let i=0; i < names.length ; i++) {
        names[i] = names[i].toUpperCase();

    }
    return names;
}

/*
 Задача 8 *:
 Напишите аналог встроенного метода slice для работы с массивами
 */
function slice(array, from, to) {
    var newArr = [];
    var newArrIndex = 0;

    if (!from) from = 0;
    if (!to) to = array.length;

    if (from < 0) from = array.length + from;
    if (to < 0) to = array.length + to;

    for (let i = from; i < to; i++) {
        newArr[newArrIndex] = array[i];
        newArrIndex++;
        //console.log("i: " + i + ", newArrIndex: " +newArrIndex + ", array[i]: " + array[i])
    }

    return newArr;
}

/*
 Задача 9 *:
 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
    let user = obj;

    let proxy = new Proxy(user, {
        set(target, prop, value) {
        console.log("Попытка записи в " + prop + ", передаваемое значение " + value + ", старое значение " +  user[prop]);
        target[prop] = value * value;
        return true;
    }
});

return proxy;
}

export {
    forEach,
    map,
    reduce,
    deleteProperty,
    hasProperty,
    getEnumProps,
    upperProps,
    slice,
    createProxy
};
