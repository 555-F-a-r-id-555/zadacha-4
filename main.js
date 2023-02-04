let size;

size = Number(window.prompt('Введите размер массива'));
let x = [];
for (j = 0; j < size; j++) {
    x[j] = Number(window.prompt(`Введите значения элементов массива x[${j}]`));
}
let i;
i = 0;
let sum;
sum = 0;
if (size == '') {
    window.alert('Вы не ввели размер массива, попробуйте еще раз !')
} else {
    while (i < size) {
        sum = sum + x[i];
        i = i + 1;
    }
    window.alert(`average = ${(sum / size)}`);
}