const raining = true;
const cold = true;

if (raining) {
  console.log('Don\'t forget your umbrella!');
}

if (cold) {
  console.log('Make sure you pick out a scarf');
}

console.log('Now you\'re ready to go outside!');

const temperature = -12;

if (temperature < 0) {
  console.log('Make sure you pick out a scarf!');
} else if (temperature < 15) {
  console.log('Short sleeves won\'t cut it!');
} else {
  console.log('Short sleeves are fine.');
}
console.log('Now you\'re ready to go outside!');

const isCitizen = false;
const age = 19;

if (isCitizen && age >= 18) {
  console.log('You are eligible to vote!');
};

const isWeird = true;
const hobby = 'none'

if (isWeird || hobby === 'none') {
  console.log('You should get out more.');
};

let crying = false;

if (!crying) {
  console.log('Keep smilin\'');
} else {
  console.log('Cheer up, kiddo');
};

let laughing = true;

if (!laughing) {
  console.log('C\'MON!');
} else {
  console.log('What\'s so funny, man?');
};