function prostaFunkcja() {
    console.log('Wywolanie funkcji');

}

prostaFunkcja();

function prostaFunkcja2(param1, param2) {
    console.log('Wywolanie funkcji dla parametrow: ' + param1 + ' ' + param2)
}

prostaFunkcja2('jeden', 'dwa');

function sum(liczbaPierwsza, liczbaDruga) {
    return liczbaPierwsza + liczbaDruga;
}
console.log('Wynik sumowania ' + sum(1, 3));