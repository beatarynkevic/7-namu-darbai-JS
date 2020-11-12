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


for (let i = 0; i<4; i++) {
    console.log(`Aplankiau: ${miestai[i]}`);
}