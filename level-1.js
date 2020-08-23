// question 1
var motorcycle = "Yamaha";

// question 2
var person = {
  name: "Ola Normann",
  age: "25"
};

// question 3
var outOfStock = true;

if(outOfStock === true) {
  console.log("Out of stock");
}
else {
  console.log("In stock");
}

// question 4
var numbers = [38, 84, 67, 21, 99];

console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);

// question 5
for(var i = 15; i <= 25; i++) {
  console.log(i);
}

// question 6
for(var i = 15; i <= 25; i++) {
  console.log(i = 20);
}

// question 7
var archives = [
  
  {
    name: "Ola Normann",
    age: 78,
    married: true
  },
  
  {
    name: "Kari Svenske",
    age: 63,
    married: false
  }
];


for(var i = 0; i < archives.length; i++) {

  console.log(archives[i].age);
  console.log(archives[i].married);
}

// question 8
function whatIDontLike(dontLike) {
  console.log("I don´t like " + dontLike);
}

whatIDontLike("cats");

// question 9
function subtractTwoNumbers(number1, number2) {
  var sum = number1 - number2;
  console.log(sum);
}

subtractTwoNumbers(250, 150);

// question 10
