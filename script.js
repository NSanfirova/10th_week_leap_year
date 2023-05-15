
let isLeapYear = prompt('Введите год:');
if ((isLeapYear % 100 === 0) && (isLeapYear % 400 !== 0)) {
    alert('Год не високосный (у него 365 дней)');
} else if (isLeapYear % 4 === 0) {
    alert('Год является високосным (366 дней)');
} else if (isLeapYear % 4 !== 0) {
    alert('Год не високосный (у него 365 дней)');
}
