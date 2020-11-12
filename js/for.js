// Ciklai - Loop - While and do 

const kiek = 8;

for ( let i = 1; i < kiek; i++ ) {        //2:15 paklausyti is naujo!!
    //logika
console.log('Labas rytas', i);

}

const alga = 5000;
const men = 12;
const pajamos = 0;

for (let i = 1; i <= men; i++) {
    console.log(`${i}) ${i * alga} pinigu`);
}

//parasyti skaicius nuo 8 iki 4

for (let i = 8; i >= 4; i--) {
    console.log(i);
}

//isvardinti ciferblato skaicius nuo duotos valandos iki galo

const valanda = 3;
const maxValandu = 12;

for (let i = valanda; i <= 12; i++) {
    console.log(i);
}


//Duotas miestu sarasas. Isvardinti kiekviena aplankytta miesta
//Spausdiname: "Aplankiau : Miesto pavadinimas."

const miestai = ['Vilnius', 'Kaunas', 'Klaipeda', 'Anyksciai'];

// console.log(`Aplankiau: ${miestai[0]}.`);
// console.log(`Aplankiau: ${miestai[1]}.`);
// console.log(`Aplankiau: ${miestai[2]}.`);
// console.log(`Aplankiau: ${miestai[3]}.`);


for (let i = 3; i>=0; i--) {
    console.log(`Aplankiau: ${miestai[i]}`);
}

for (let i = 0; i<4; i++) {
    console.log(`Aplankiau: ${miestai[i]}`);
}

for (let i = 0; i < miestai.length; i++) {
     const miestoPavadinimas = miestai[i];
     console.log(`Aplankiau: ${miestoPavadinimas}`);
}
 

const abc = ['a', 'b', 'c', 'd', 'e', 'f'];

console.log(abc);

for (let pozicija = abc.length - 1; pozicija >= 0; pozicija--) {
    console.log(abc[pozicija]);
}

console.clear();

const text = 'dodekahedronas';

console.log(text[0]);
console.log(text[1]);
console.log(text[2]);

console.log(text.length);

for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
}

console.clear();
//kas antra raide isspausdinti -> bdf

const text2 = 'abcdef';
let rez = '';

for (let i = 1; i < text2.length; i = i + 2) {
    const raid = text2[i];
    rez = rez + raid;
}


console.log(rez);


// 0 1 2 3 4 5
// a b c d e f