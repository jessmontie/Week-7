//Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
//Programmatically subtract the value of the first element in the array from the value in the last element of the array.//
//Do not use numbers to reference the last element, find it programmatically.
//ages[7] - ages[0] is not allowed!

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log("Ages:", ages);
let minusAge = ages[ages.length -1] - ages[0];
console.log("minusAge",minusAge);

//Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).

ages.push(100);
console.log("Ages after pushing a new value", ages);
let minusAgePush = ages[ages.length -1] - ages[0];
console.log("minusAge", minusAgePush);

// Use a loop to iterate through the array and calculate the average age.
let sumOfAges = 0;

for(let i = 0; i < ages.length; i++) {
    sumOfAges += ages[i];
    console.log("index:", i, "sumOfAges:", sumOfAges);
}
console.log("Total Sum", sumOfAges);
let average = sumOfAges / ages.length;
console.log("Average", average);

//Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
//Use a loop to iterate through the array and calculate the average number of letters per name.

let names = ["Sam" , "Tommy" , "Tim" , "Sally" , "Buck" , "Bob"];
let totalChars = 0; 

//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
for (let i = 0; i < names[i].length; i++) {
    console.log("index:" , i , "name:" , names[i], "totalChars;",
    totalChars);
}
let averageName = totalChars / names.length;
console.log("Average of Names:", averageName);

//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
let concatNames = "";
for (let i = 0; i < names.length; i++) {
concatNames = concatNames.concat(names[i] + " ");
console.log(i, "Names concatenated", concatNames);
}

//How do you access the last element of any array?
console.log("First element onf ages array:", ages[0]);

//How do you access the first element of any array?
console.log("First element of ages array:", ages[0]);

//Create a new array called nameLengths. 
//Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

let nameLenghts =[];
for(let i = 0; i < names.lenght; i++) {
nameLenghts.push(names[i].length);
console.log("Name lenghts array:", nameLenghts);
}


//Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

let charsTotal = 0;
for (let i = 0; i < nameLenghts.length; i ++) {
charsTotal += nameLenghts[i];
console.log("CharsTotal:", charsTotal);
}


//Write a function that takes two parameters//

function concatWords(word, n) {
console.log("Word Par:", word, "n Par:" , n);
let concat = word.repeat(5);
console.log(concat);
}

concatWords("Hello", 3);

//Write a function that takes two parameters, firstName and lastName, and returns a full name. 
//The full name should be the first and the last name separated by a space.//

let numbers1 = [100,200,300,400]
let numbers2 = [1,2,3,4]

function sumNumbersArray(array){
    let total =0;

    for (let i= 0; i < array.length; i++) [
        //console.log(i, "Test")
        total += array[i],
        console.log("Total:", total),
    ]

    if(total > 100) [
        console.log("Total:", total, true),
        return true;
    ] else[
        console.log("Total:", total, false),
         return false;

    ]

}
sumNumbersArray(numbers1);

  
//Write a function that takes an array of numbers and returns the average of all the elements in the array.//

function calculateNumbersAverage(array) [
    let total = 0, 

for (let i = 0; i < array.length; i++ ) [

    total += array[i],
    console.log("calculate Function, total:", total),
]

let average = total /array length; i++) [
    console.log("Average of numbers, average"); 
]
]
]






