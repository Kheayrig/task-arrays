import { Console } from 'console';

/*
  В функцию arraySorting() приходит строка чисел с разделительными запятыми вида "1,2,33,0,17".
  Преобразуте строку в массив чисел, отсортируйте их по возрастанию и верните строку с упорядоченными числами,
  разделенными запятыми.
*/
export function arraySorting(data) {
    let arr = data.split(',').map(Number);
    let len = arr.length;
    let resultArr = [];
    let min;

    for (let i = 0; i < len; i++) {
        min = Math.min(...arr);
        arr.splice(arr.indexOf(min), 1);
        resultArr[i] = min;
    }

    return resultArr.join();
}

/*
  В функцию arrayFiltering() приходит массив целых чисел.
  Преобразуйте массив таким образом, чтобы все элементы массива, в которых содержатся числа более 100,
  были бы удалены из массива, и верните его в качестве результата функции.
*/
export function arrayFiltering(data) {
    return data.filter(function (n) {
        return n <= 100;
    });
}

/*
  В функцию arrayPushing() приходят два массива целых чисел размерностью 5 элементов.
  Получите третий массив размерностью 10 элементов, в котором последовательно чередуются
  значения из первых двух массивов, и верните его в качестве результата функции.
*/
export function arrayPushing(array1, array2) {
    let arr = [];

    for (let i = 0; i < 5; i++) {
        arr.push(array1[i]);
        arr.push(array2[i]);
    }

    return arr;
}
