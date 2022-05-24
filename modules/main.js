console.log('---------------------');
const africa = [
  'Zebras',
  'Liūtas',
  '',
  'Raganosis',
  '',
  'Raganosis',
  'Begemotas',
];
const australia = ['Kengūra', 'Ančiasnapis', 'Dingo', 'Atsirado', 'Strutis'];

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log('----------1-----------');
// 1. Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius <h2> tagus ir vieną mygtuką. (2 taškai)
// a. Paspaudus mygtuką kiekvienam tagui sugeneruotkite rand() atskirą skaičių nuo 1 iki 6 ir jį įrašykite į tago vidų naudojant innerText() metodą. (4 taškai)
// b. Paspaudus mygtuką skaičiai turi būti pergeneruojami iš naujo. Jeigu sugeneruoti skaičiai yra vienodi, juos nudažyti raudonai. (4 taškai)

function randomButton() {
  const h2dom = document.querySelector('#content');
  const h2dom2 = document.querySelector('#content2');
  h2dom.innerText = rand(1, 6);
  h2dom2.innerText = rand(1, 6);
  if (h2dom.innerText === h2dom2.innerText) {
    h2dom.style.color = 'red';
    h2dom2.style.color = 'red';
  } else {
    h2dom.style.color = 'black';
    h2dom2.style.color = 'black';
  }
}

console.log('----------2-----------');
// 2. Tiesiogiai HTML faile rankiniu būdu sukurkite <h3> tagą ir vieną mygtuką. Susikurkite tuščią masyvą, skaičiams saugoti. (2 taškai)
const arr = [];
// a. Paspaudus mygtuką, sugeneruokite rand() skaičių nuo 1 iki 10. Sugeneruotą skaičių pridėkite į masyvą, o tą masyvą atspausdinkite konsolėle. (4 taškai)

// b. <h3> tage skaičiuokite ir su innerText() metodu rašykite visų sugeneruotų skaičių sumą. (4 taškai)

function arrayRan() {
  const h3Dom = document.querySelector('#h3');
  arr.push(rand(1, 10));
  h3Dom.innerText = arr.reduce(function (a, b) {
    return a + b;
  }, 2);
}

console.log('----------3-----------');
// 3. Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą. (2 taškai)
// a. JS pagalba perskaitykite masyvą africa. (4 taškai)

const ulAfrica = document.querySelector('#ul');
africa.forEach((element) => {
  if (element.length !== 0) {
    const text = document.createElement('li');
    text.innerText = element;
    ulAfrica.appendChild(text);
  }
});
// console.log('africa');
// b. Naudodami createElement() ir kitus reikalingus metodus sukurkite kiekvienam masyvo elementui po <li> tagą su elemento stringu viduje ir juos įrašykite į <ul> tago vidų. (5 taškai)
createElement('africa');

// c. Elementus su tuščiais stringais praleiskite ir jiems <li> elementų nekurkite. (4 taškai)

console.log('----------4-----------');
// 4. Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius input laukelius, vieną <h5> tagą ir du mygtukus: “+” ir “-”. (2 taškai)
// a. Suprogramuokite kalkuliatorių taip, kad įrašius skaičius į abu input laukelius ir paspaudus atitinkamą mygtuką su skaičiais būtų atlikta atitinkama aritmetinė operacija. (10 taškai)
// b. Jos rezultatas būtų atvaizduotas <h5> tage. (3 taškai)
// Pasirinkite patys sau patogiausius metodus tai atlikti.

let firstNb = document.querySelector('#num1');
let secondNb = document.querySelector('#num2');
const add = document.querySelector('#plus');
const remove = document.querySelector('#minus');
const result = document.querySelector('#result');
add.addEventListener('click', function () {
  firstNb += secondNb;
  result.innerHTML = firstNb;
});
remove.addEventListener('click', function () {
  firstNb -= secondNb;
  result.innerHTML = firstNb;
});

console.log('---------5------------');
// 5. Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą. (2 taškai)
// a. JS pagalba perskaitykite masyvą australia ir kiekvieną masyvo elementą įrašykite į strigą su <li> tagais iš abiejų pusių, o visus gautus stringus sudėkite į vieną bendrą stringą. (8 taškai)
const ul = document.querySelectorAll('#ul')[1];
// b. Tą stringą naudodami innerHTML() metodą įdėkite į <ul> tago vidų. (5 taškai)
// c. Generavimo metu “Dingo” background’ą nuspalvinkite mėlynai. (5 taškai)
let text2 = '';
australia.forEach((element) => {
  text2 += '<li style = "width:200px';
  if (element === 'Dingo') {
    text2 += ';background-color:blue';
  }
  text2 += `">${element}</li>`;
});
ul.innerHTML = text2;
console.log('---------------------');
