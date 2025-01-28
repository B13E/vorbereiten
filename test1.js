function test1(a, b) {
    return a + b;
}

let a = 7;
let b = 2;

function test2() {
    return a - b;
}

function test3() {
    return 6 * 3;
}

console.log(test1(a, b), test2());
console.log(test3());

let text = "The index is";
for (let i = 0; i < 5; i++) {
    console.log(text + i);
}

let text1 = "The index is ";
for (let i = 0; i < 5; i++) {
    console.log(text + " " + i);
}

// Object
let person = {
    name: "John",
    age: 30,
    city: "Thun"
};

console.log(person);
console.log(person.name + " is " + person.age + " years old and lives in " + person.city);

person.work = "Developer";
console.log(person);

let animals = ["dog", "cat", "bird"];
console.log(animals);
animals.push("fish");
console.log(animals);
animals.pop(3);
console.log(animals);

let students = {
    name: "John",
    age: 30,
    city: "Thun",
    grades: [5, 4, 6]
};

console.log(students);
console.log(students.grades[0]);
students.grades.push(3);
console.log(students);
console.log(students.grades);
students.single = true;
console.log(students);