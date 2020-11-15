// abcdef -> bdf
// 012345

const des = 'abcdef';
let rez = '';

for (let i = 1; i < des.length; i = i + 2) {
    const ra = des[i]; // 1-> b 2-> d 3-> f
    rez = rez + ra;   // 1-> b 2-> b+d 3-> bd+f
}

console.log(rez);

//1. ivardinti kintamaja
//2. ivardinti kintamaja, kuri keicia reiksme, su tuscia reiksme
//3. ivardinti cikla, ivardinus salygas
//4. ivardinti kintamaja, kuri laikys duomenis apie kiekviena cikla
//5. naudojame kintamaja, kurios reiksme yra tuscia

//2 uzduotis
//panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
//pvz.: “abcdef” -> “fedcba”


const letters = 'abcdef';
let sum = '';

for (let a = letters.length - 1; a >=0 ; a--) {
    sum = sum + letters[a];
}
console.log(sum);

//1 uzduotis 0+1+2+3+4

let suma = 0;

for (let b = 0; b <= 100; b++) {
    suma =suma + b;
}
console.log(suma);

const pirmas = 7;
const antras = 3;
const summi = pirmas + antras;
console.log(summi);

const vardas = 'ana';
const age = 15;
//______yra___metu amziaus;
const sakinys = vardas + ' yra ' + age + ' metu amziaus';
console.log(sakinys);

const katinas = 'burbon';
const spalva = 'ryzos';
const metai = 7;

//___yra___spalvos ir jam yra___ metai;
const katinelis =`${katinas} yra ${spalva} spalvos ir jam yra ${metai} metai`;
console.log(katinelis);


const actor = 'Tom';
const actorsLast = 'Hardy';
const birth = 1940;
const currentYear = 2020;
const amzius = currentYear - birth;

//Tom Hardy (80)

const tekstas = `${actor} ${actorsLast} (${amzius})`;
console.log(tekstas);

//pinigine

const pinigine = 0;
const sausis = 100;
const vasaris = 200;
const kovas = 70;

//100
//300
//370

const sausioPajamos = pinigine + sausis;
console.log(sausioPajamos);

const vasarioPajamos = sausioPajamos + vasaris;
console.log(vasarioPajamos);

const kovoPajamos = vasarioPajamos + kovas;
console.log(kovoPajamos);

console.clear();

let pinigine2 = 0;
pinigine2 = pinigine2 + sausis;
pinigine2 = pinigine2 + vasaris;
pinigine2 = pinigine2 + kovas;
console.log(pinigine2);

const mother = "Mum said: \"Don't do it!\".";
const mother2 = 'Mum said: "Don\'t do it!\".';

console.log(mother);
console.log(mother2);


/*
<div>
    <p> Lorem </p>
    <a href="#">Click me </a>
</div> 
*/

const html = '<div>\
                <p> Lorem </p>\
                <a href="#">Click me </a>\
            </div>';

console.log(html);

const html2 = `<div>
                <p> Lorem </p>
                <a href="#">Click me </a>
            </div>`;

console.log(html2);

//petriuko pazymiai
const petriukoPazymiai = [2, 10, 7, 5];     //<<Kaip inicijuoti sarasa.
console.log(petriukoPazymiai);

//pazymiu vidurki


let pazymiai2 = 0; 
pazymiai2 = pazymiai2 +petriukoPazymiai[0];  //<<kaip isgauti duomenis is norimospozicijos
pazymiai2 = pazymiai2 +petriukoPazymiai[1];
pazymiai2 = pazymiai2 +petriukoPazymiai[2];
pazymiai2 = pazymiai2 +petriukoPazymiai[3];

const kiekis = petriukoPazymiai.length;
const atsak = pazymiai2 / kiekis;

console.log(atsak);