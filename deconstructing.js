// 1. Array Destructing
// 01 Basic Array Destructing
const books = [
  {
    id: "001",
    title: "hello javascript",
    price: 12.233,
    publishDate: "2024-12-23",
  },
  {
    id: "002",
    title: "hello java",
    price: 12.233,
    publishDate: "2024-12-23",
  },
];
const [book1, book2] = books;
console.log(book1); // Output: { id: '001', title: 'hello javascript', price: 12.233, publishDate: '2024-12-23' }
console.log(book2); // Output: { id: '002', title: 'hello java', price: 12.233, publishDate: '2024-12-23' }

// 02 Skip Unwanted Elements
const arr = [1, 2, 3, 4];
const [first, , third] = arr;
console.log(first); // Output: 1
console.log(third); // Output: 3

// 03 Default Values
const anotherArr = [1];
const [one, two = 2] = anotherArr;
console.log(one); // Output: 1
console.log(two); // Output: 2

// 04 Rest Operator for Arrays
const thirdArr = [1, 2, 3, 4, 5];
const [oneOfThirdArr, ...rest] = thirdArr;
console.log(oneOfThirdArr); //Output: 1
console.log(rest); // Output: [ 2, 3, 4, 5 ]

// 2. Object Deconstructing
// 01 Basic Destructing
const person = {
  name: "Alice",
  age: 25,
  city: "New York",
};
const { name, age, city } = person;
console.log(name); // Output: Alice
console.log(age); // Output: 25
console.log(city); // Output: New York

// 02 Renaming Variables
const { name: fullName, age: yearsOld } = person;
fullName;
yearsOld;

// 03 Default Values for Object Properties
const person1 = { name: "Jack", job: "Developer" };
const { job, email = "jack.li.cn@outlook.com" } = person1;
job;
email;

// 04 Nested Object Destructuring
const person2 = {
  lastName: "Li",
  address: { state: "New York", zip: "10001" },
};

const {
  lastName,
  address: { state, zip },
} = person2;

lastName;
state;
zip;

// 3. Destructuring in Function Parameters
// 01 Object Destructing in Function Parameters
function greet({ name, age }) {
  console.log(`Hello my name is ${name} and I am ${age} years old.`);
}
const person3 = { name: "Steven", age: "16" };
greet(person3);

// 02 Array Destructing in Function Parameters
function sum([a, b]) {
  return a + b;
}

const numbers = [5, 10];
console.log(sum(numbers));
