// Q1
document.querySelector('.card').style.backgroundColor= '#202127';
document.querySelector('.card').style.color= 'white';
document.querySelector('.card').style.h1= 'Team Hercules';
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
alert('Welcome to task 5');
let num1 = prompt('Enter a number');
let num2 = prompt('Enter a number');

  function division (num1, num2){
  return (num1/num2);
}
console.log(num1%num2);


// Q6

function quadraticEqn(a,b,c){
  let addition = ((-b + Math.sqrt(Math.pow(b,2)) - (4*a*c))-(2/a));
  let subtraction = ((-b - Math.sqrt(Math.pow(b,2)) - (4*a*c))-(2/a));
  return addition,subtraction;
}
console.log(`the answer is ${quadraticEqn()}`);

// Q7

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = `the ${myAdjective} ${myNoun} ${myVerb} very ${myAdverb}`;

console.log(wordBlanks);

// Q8

const pi = 3.142;
let r = 9;

function circleArea(pi , r){
  return(pi * r * r);
}
console.log(pi*r*r);

// Q9

// formula = PT x R/100
const money = 8200;
const percent = 17.5;
const years = 2.5;

const interest = 8200 * 2.5 *(17.5/100);
console.log(interest);

// Q10


  let number1 = 10;
  let number2 = 4;
  
  let divide = number1/number2;
  console.log (number1%number2);

  // Q11
  let meritWeight = 78;
  let meritHeight = 1.69;
  let nutJobWeight = 92;
  let nutJobHeight = 1.95;

  let testDataMerit = meritWeight/(meritHeight*meritHeight);
  let testDataNutJob = nutJobWeight/(nutJobHeight*nutJobHeight);

  console.log(testDataMerit, testDataNutJob);

  // if (testDataMerit > testDataNutJob){
  //   console.log(true);
  // } else{
  //   console.log(false);
  // }

  // Data 2
  let meritNewWeight = 95;
  let meritNewHeight = 1.76;
  let nutJobNewHeight = 1.88;
  let nutJobNewWeight = 85;

  let newTestDataMerit = meritNewWeight/(meritNewHeight*meritNewHeight);
  let newTestDataNutJob = nutJobNewWeight/(nutJobNewHeight*nutJobNewHeight);

  console.log(newTestDataNutJob, newTestDataMerit);

  // if (newTestDataNutJob < newTestDataMerit){
  //   console.log(true);
  // } else{
  //   console.log(false);
  // }
  const meritBMI = testDataMerit > testDataNutJob && newTestDataMerit > newTestDataNutJob;
  console.log(meritBMI);




