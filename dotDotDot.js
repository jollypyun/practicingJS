const person = {
    name: 'Max'
}

// spread
const newPerson = {
    ...person,
    age: 29
}

console.log(newPerson);

const numbers = [1,2,3,4];
const numb3rs = [...numbers, 5]; // spread

console.log(numb3rs);

const filter = (...args) => args.filter(el => el === 1);
console.log(filter(1,2,3));