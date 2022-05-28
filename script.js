// Q1
document.querySelector('.card').style.backgroundColor= '#202127';
document.querySelector('.card').style.color= 'white';
document.querySelector('.god').style.color= '#deb150';

// Q2
const members = ['aSafeSquare', 'Micheal' , 'VictorN', 'Precious' , 'Martha' , 'Rhema' , 'Edward'];
console.log(members[4]);

// Q3

let aboutMe = {
  firstName: 'Alao',
  lastName: 'Martha',
  bestMovie: 'Adam Project',
  bestFood: 'Chicken and Chips',
  complexion: 'slightly fair',
  birthMonth: 'July',
  state: 'Osun',
  groupName: 'Hercules'
};

console.log(aboutMe['bestMovie']);

// Q4

let noun = 'Susan';
let verb = 'sings';
let adjective = 'beautiful';

console.log(`The way ${noun} ${verb} is so ${adjective} `);
console.log(`${noun} is very ${adjective}`);
console.log(`Everyone ${noun} knows ${verb} well`);
console.log(`The ${adjective} ${noun} is here`);
console.log(`${noun} ${verb} in church every Sunday`);

// Q5

let num1 = prompt('Enter a number');
let num2 = prompt('Enter another number');

division = num1/num2;

console.log(num1%num2);

// Q6

let addition , subtraction ;

let a = prompt('Enter value for a');
let b = prompt('Enter value for b');
let c = prompt('Enter value for c');


let formula = b*b - 4* a* c;
console.log(formula);
addition = (- b + Math.sqrt(formula))/ (2 * a);
subtraction = (- b - Math.sqrt(formula))/ (2 * a);

console.log(`The answer is ${addition} or ${subtraction}`);


// Q7

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = `the ${myAdjective} ${myNoun} ${myVerb} very ${myAdverb}`;

console.log(wordBlanks);

// Q8

const pi = 3.142;
let r = prompt('Please enter a number here');

let circleRadius = pi * r * r;

console.log(circleRadius);

// Q9

const money = 8200;
const percent = 17.5;
const years = 2.5;

const interest = 8200 * 2.5 *(17.5/100);
console.log(interest);

// Q10


  let number1 = 10;
  let number2 = 4;
  
  division = number1/number2;
  console.log (number1%number2);

  // Q11
  let meritWeight = 78;
  let meritHeight = 1.69;
  let nutJobHeight = 1.95;
  let nutJobWeight = 92;

  let testDataMerit = meritWeight/(meritHeight*meritHeight);
  let testDataNutJob = nutJobWeight/(nutJobHeight*nutJobHeight);

  console.log(testDataMerit, testDataNutJob);
  if (testDataMerit > testDataNutJob){
    console.log(true);
  } else{
    console.log(false);
  }

  // Data 2
  let meritNewWeight = 95;
  let meritNewHeight = 1.88;
  let nutJobNewHeight = 1.76;
  let nutJobNewWeight = 85;

  let newTestDataMerit = meritNewWeight/(meritNewHeight*meritNewHeight);
  let newTestDataNutJob = nutJobNewWeight/(nutJobNewHeight*nutJobNewHeight);

  console.log(newTestDataNutJob, newTestDataMerit);
  if (newTestDataNutJob < newTestDataMerit){
    console.log(true);
  } else{
    console.log(false);
  }




