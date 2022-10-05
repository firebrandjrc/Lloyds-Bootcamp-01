// let firstInput = +(prompt("What is your first number?"));
// let secondInput = +(prompt("What is your second number?")); // preferred solution
// // let secondInput = (prompt("What is your second number?") / 1); // okay solution

function confirmation() {
    console.log("The process has been completed");
}

function addition(numberOne, numberTwo) {
    // console.log(numberOne + numberTwo);
    return numberOne + numberTwo;
}

function subtraction(numberOne, numberTwo) {
    // console.log(numberOne + numberTwo);
    return numberOne - numberTwo;
}

function multiplication(numberOne, numberTwo) {
    // what will happen?
    return numberOne * numberTwo;
}

function division(numberOne, numberTwo) {
    // what will happen?
    return numberOne / numberTwo;
}

function options() {
    let input = prompt("Welcome to the lift, which floor would you like?\nFloor One\nFloor Two\nFloor Three");

    if(input == "Floor One")
    {
        floorOne(); // now, go to the function floorOne...
    }
    else if(input == "Floor Two")
    {
        floorTwo(); // now, go to the function floorTwo...
    }
    else if(input == "Floor Three")
    {
        floorThree();
    }
    else {
        console.log("That isn't option. Try again.");
        options();
    }
}

function floorOne() {
    console.log("Welcome to Floor One");
}

function floorTwo() {
    console.log("Welcome to Floor Two");
}

function floorThree() {
    console.log("Welcome to Floor Three");
}

options();

// what should the parameters be in the brackets?
// let answer = addition(firstInput, secondInput);
// console.log(answer);
// confirmation(); // calling the function -> running the function