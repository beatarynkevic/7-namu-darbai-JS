//1. sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis

const age = 99;
console.log(age);

const year = 2020;
console.log(year);

const luckyNumber = 13;
console.log(luckyNumber);

//2. sukurti 3 kintamuosius su teksto tipo reikšmėmis

const name = 'Johny';
console.log(name);

const city = 'Abu Dabi';
console.log(city);

const airplane = 'Boeing 747'; //primityvios reiksmes skaiciai ir raides
console.log(airplane);

//3. Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis


const marks = [10, 7, 4, 8, 6]; //kompleksines reiksmes
console.log(marks);

const lottery = [10, 7, 4, 8, 6];
console.log(lottery);

//Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis

const cities = ['Big Apple(NY)', 'Sydney', 'Lisabona', 'Troskunai', 'Los Angel(LA)'];
console.log(cities);

const names = ['Chuck', 'Bruce', 'Wonder Woman', 'Algimantas', 'Walter', 'Xena'];
console.log();

//Veiksmai

const sum = age + year + luckyNumber;
console.log(sum);

// const zodziai = name + ' ' + city + ' ' + airplane;
const zodziai = `${name} ${city} ${airplane}`;
console.log(zodziai);

//3. marks, lottery
//logika 1 - 2 + 3 - 4 + 5

// 10 - 7 + 4 - 8 + 6 = 5
//conts marksMath = marks[0] - marks[1] + marks[2] - marks[3] + marks[4];

let marksMath = 0;
marksMath = marksMath + marks[0];
marksMath = marksMath - marks[1];
marksMath = marksMath + marks[2];
marksMath = marksMath - marks[3];
marksMath = marksMath + marks[4];
console.log(marksMath);

// 13 - 7 + 24 - 2 = 28
// const lotteryMAth = lottery[0] - lottery[1] + lottery[2] - lottery[3];
let lotteryMath = 0;
lotteryMath = lotteryMath + lottery[0];
lotteryMath = lotteryMath - lottery[1];
lotteryMath = lotteryMath + lottery[2];
lotteryMath = lotteryMath - lottery[3];
console.log(lotteryMath);

//4. cities, names
let allCities = '';
allCities = allCities + cities[0];
allCities = allCities + ', ' + cities[1];
allCities = allCities + ', ' + cities[2];
allCities = allCities + ', ' + cities[3];
allCities = allCities + ', ' + cities[4];

console.log(allCities);
