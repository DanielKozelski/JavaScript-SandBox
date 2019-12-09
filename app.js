//Alert("Hello from the app.js");
const name='John';
const age=25;
const job="Software Developer";
const city="Tallinn";
 
//Hello function//
function hello(){
    return "Hello";
}

//Template literal//
let html =`
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${name} says: ${hello()}</li>
    </ul>
`;
document.body.innerHTML = html;

//Get the data type of John's job//
console.log(typeof(job));

//the data type of John's age//
console.log(typeof(age));

//Arrays//
const number1 = [1, 2, 3, 4, 5];
console.log(number1);
console.log(typeof(number1))

const number2 = new Array(6, 7, 8, 9, 10);

//Foreach loop for arrays//
number2.forEach(number =>{
    console.log("Let count:", number);
});

const mixedArray = [22, "Banana", true];
mixedArray.forEach(element =>{
    console.log(element, "is a", typeof(element));
})

//The lenght of the string element//
console.log("Banana is a", mixedArray[1].length, "chars long");

//Add and elements to an array//
mixedArray.push("Apple");
mixedArray.forEach(element =>{
    console.log("Update array: ", element);
});

//Add an element to the begining of the array//
mixedArray.unshift(1000);
mixedArray.forEach(element =>{
    console.log("Update array: ", element);
});

//Delete the last element//
mixedArray.pop();
mixedArray.forEach(element =>{
    console.log("Update array: ", element);
});

//Delete the first element//
mixedArray.shift();
mixedArray.forEach(element =>{
    console.log("Update array: ", element);
});

//Remove an element at certain position//
mixedArray.splice(1,1);
mixedArray.forEach(element =>{
    console.log("Update array: ", element);
});

//Objects literals//
const person = {
    firstname: "John",
    lastname: "Doe",
    age: "25",
    email: "JohnDoe@gmail.com",
    hobbies: ["Music", "Sport"],


    getYearOfBirth: function() {
        return 2019 - this.age;
    }
}

let val;
val = person;
val = person.firstname;
val = person.lastname;
val = person.age;
val = person.hobbies[1];
val = person.getYearOfBirth();
console.log(val);

const people = [
    {name: "John", age: 25},
    {name: "Mark", age: 26},
    {name: "Tom", age: 24},
    {name: "Sarah", age: 27},
]

people.forEach(person =>{
    console.log(person.name, "is", person.age, "years old");
})