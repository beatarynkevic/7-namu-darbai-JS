/*
palyginimo salygos (if):
galimi operatoriai: >, <, >=, <=, ==, !=, ===, !==
NAUDOTINI: >, <, >=, <=, ===, !==
nenaudotini: ==, !=
*/

/*
Galimos strukturos: 

*/





const accountBalance = 100;
const transfer = 200;

if (accountBalance < transfer) {
    console.log('Banko zinute: saskaitoje truksta pinigu.');
}

if (accountBalance >= transfer) {
    console.log('Banko zinute: pavedimas padarytas.');
}

if (accountBalance >= transfer) {
    console.log('Banko zinute: pavedimas padarytas.');
} else {
    console.log('Banko zinute: saskaitoje truksta pinigu.');
}

//akys 1

 const akys = 'melynos';

 if (akys == 'melynos') {
     console.log('Grazios sirdies zmogus');
 } else if (akys == 'zalios') {
    console.log('Melagiai...');
} else if (akys == 'raudonos') {
    console.log('Programuotojas...');
} else {
    console.log('A tu turi akis???');
}

console.log('Pirmas bandymas baigtas. Kas toliau?..')

//akys 2

const akys2 = 'zalios';

if (akys2 == 'melynos') {
    console.log('Grazios sirdies zmogus');
} else {
    if (akys2 == 'zalios') {
        console.log('Melagiai');
    } else {
        if (akys2 == 'raudonos') {
            console.log('Programuotojas')
        } else {
            console.log('A tu turi akis???');
        }
    }
}


//naudotini nenaudotini skirtumas


const pirmas = 8;
const antras = 8;

if (pirmas != antras) {
    console.log(true);
} else {
    console.log(false);
}