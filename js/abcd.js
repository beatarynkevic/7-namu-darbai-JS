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


//panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
//pvz.: “abcdef” -> “fedcba”


const letters = 'abcdef';
let sum = '';

for (let a = letters.length - 1; a >=0 ; a--) {
    const bla = letters[a]; 
    sum = sum + bla;
}
console.log(sum);