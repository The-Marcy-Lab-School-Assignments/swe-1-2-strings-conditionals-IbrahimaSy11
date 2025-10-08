function measureRain(inches) {
  if (inches === 0) {
    return 'drought';
  } else if (inches < 2) {
    return 'dry';
  } else if (inches < 4) {
    return 'average';
  } else if (inches < 6) {
    return 'rainy';
  } else {
    return 'flood';
  }
}

function happyBirthdayPet(breed, age) {
  if (breed === 'snake') {
    return 'Hiss hiss!';
  } else if (breed === 'cat' && age < 5) {
    return 'Mew mew!';
  } else if (breed === 'cat' && age >= 5) {
    return 'Meow meow!';
  } else if (breed === 'dog' && age < 5) {
    return 'Arf arf!';
  } else if (breed === 'dog' && age < 10) {
    return 'Woof woof!';
  } else if (breed === 'dog' && age >= 10) {
    return 'Boof!';
  } else {
    return 'Happy birthday!';
  }
}

function funTypes(jsType) {
  if (typeof jsType === 'string') {
    return "That's just some text.";
  } else if (typeof jsType === 'number' && !Number.isNaN(jsType)) {
    return "That's a good number.";
  } else if (typeof jsType === 'boolean') {
    return "To bool, or not to bool?";
  } else if (typeof jsType === 'undefined') {
    return "Nothing, but I didn't set that.";
  } else if (jsType === null) {
    return "Nothing, and I did set that.";
  } else if (Array.isArray(jsType)) {
    return "I order you to be indexed.";
  } else if (typeof jsType === 'object') {
    return "Anybody got the key?";
  } else if (Number.isNaN(jsType)) {
    return "Well, now you're just showing off.";
  } else {
    return "Unknown type.";
  }
}

function rounder(float, roundingSetting) {
  if (roundingSetting === 'up') {
    return Math.ceil(float);
  } else if (roundingSetting === 'down') {
    return Math.floor(float);
  } else if (roundingSetting === 'honest') {
    return Math.round(float);
  } else {
    return 'Invalid rounding setting';
  }
}

function formatName(first, last) {
  const formattedFirst = first.charAt(0).toUpperCase() + first.slice(1).toLowerCase();
  const formattedLast = last.charAt(0).toUpperCase() + last.slice(1).toLowerCase();
  return `${formattedFirst} ${formattedLast}`;
}

function extractDomain(email) {
  return email.split('@')[1];
}

function startsWithVowel(str) {
  const firstLetter = str.charAt(0).toLowerCase();
  return ['a', 'e', 'i', 'o', 'u'].includes(firstLetter);
}

function rotate(str, num) {
  if (str.length === 0) return str;
  num = num % str.length;
  return str.slice(-num) + str.slice(0, -num);
}

module.exports = {
  measureRain,
  happyBirthdayPet,
  funTypes,
  rounder,
  formatName,
  extractDomain,
  startsWithVowel,
  rotate,
};
