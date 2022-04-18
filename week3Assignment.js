// NUMBER 1

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages[ages.length -1] - ages[0]); 

ages.push(56);
console.log(ages);

console.log(ages[ages.length -1] - ages[0]);


let sum = 0;
for (i = 0; i < ages.length; i++) {
    sum = sum + ages[i];
}
console.log(sum / ages.length); 

// NUMBER 2


let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

sumOfLetters = 0;
for (i = 0; i < names.length; i++) {
sumOfLetters = sumOfLetters + names[i].length;
}
console.log(sumOfLetters / names.length);

concatNames = "";
for (i = 0; i < names.length; i++) {
    concatNames = concatNames + names[i] + " ";
}
console.log(concatNames);


// NUMBER 3

let array1 = [3, 5, 7, 3, 6, 10];
console.log(array1[array1.length -1]);

// to access last element of an array, do nameOfArray[nameOfArray.length -1]
// the length of an array is one higher than the index because we start on zero. Zero based indexing. 

// NUMBER 4

console.log(array1[0]);

// to access first element of an array, do nameOfArray[0];
// zero based indexing means the first element of an array is in place 0.

// NUMBER 5

let nameLengths = [];
for ( i = 0; i < names.length; i++) {
nameLengths.push(names[i].length);
}
console.log(nameLengths);


// NUMBER 6

let sum1 = 0;
for (i = 0; i < nameLengths.length; i++) {
    sum1 = sum1 + nameLengths[i];
}
console.log(sum1);

// NUMBER 7

function concat (word, n) {
    x = "";

    for (i = 0; i < n; i++) {
        x = x + word;
        }

        return x;

}

// NUMBER 8

function createFullName (firstName, lastName) {

return firstName + " " + lastName;

}

// NUMBER 9


function functioning (numbers) {

    sum = 0;
    for (i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    if (sum > 100) {
        return true;
    }
    return false;

} 

// NUMBER 10

function averageArray (numbers) {

    sum = 0;
    for (i =0; i < numbers.length; i++) {
        sum = sum + numbers[i];

    } 
    return sum / numbers.length;
}


// NUMBER 11

function arrayGreaterThan (numbers1, numbers2) {

    sum = 0;
    for (i = 0; i < numbers1.length; i++) {
        sum = sum + numbers[i];
    }
    let average1 = sum / numbers1.length;

    sum = 0;
    for (i = 0; i < numbers2.length; i++) {
        sum = sum + numbers2[i];
    }
    let average2 = sum / numbers2.length;

    if (average1 > average2) {
        return true;
    }
    return false;

}

// NUMBER 12

function willBuyDrink (isHotOutside, moneyInPocket) {
    if (isHotOutisde && (moneyinPocket > 10.50)) {
        return true;
    } 
    
    
    return false;
}

// NUMBER 13

function goPlayPoker (homeworkFinished, moneyInPocket) {
    if (homeworkFinished && (moneyInPocket >= 100)) {
        return "Go play poker, but don't drink too much.";
    }
    else if (homeworkFinished && (moneyInPocket < 100)) {
        return "Get yo money up, foo!";
    }
    else if (!homeworkFinished && (moneyInPocket >= 100)) {
        return "Shouldn't you finish the code homework?";
    }
    
    return "Get your shit together, dude.";
}

// Function go play poker takes two parameters. homeworkFinished is boolean, and moneyInPocket is a number. 
// if homework is finsihed and I have $100, computer has granted me permission to go have fun but not drink too much.
// if I finished my homework, but I'm broke, I need to get my racks up before I can go play poker.
// if I did not finish my homework, but I have enough money to play, I shouldn't go. I need to get my coding done first.
// if neither of these condition are met (yikes), I have more important things to do like finish homework and get more money.
























