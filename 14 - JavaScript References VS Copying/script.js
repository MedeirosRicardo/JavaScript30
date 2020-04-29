// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = 'Ricardo';
let name2 = name;
console.log(name, name2);
name = 'Arninho';
console.log(name, name2);

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;
console.log(players, team);

// You might think we can just do something like this:
team[3] = 'Lux';
console.log(players, team);

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice();
const team3 = [].concat(players);

// one way

// or create a new array and concat the old one in

// or use the new ES6 Spread
const team4 = [...players];
team4[3] = 'heee haww';
console.log(team4,players);

const team5 = Array.from(players);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: 'Wes Bos',
    age: 80
};

    // and think we make a copy:
    const captain = person;

    // how do we take a copy instead?
    const cap2 = Object.assign({}, person, { number: 99, age: 12 });
    console.log(cap2, captain);

    // We will hopefully soon see the object ...spread

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

    const ricardo = {
        name: 'Ricardo',
        age: 100,
        social: {
            twitter: '@test',
            facebook: 'test.developer'
        }
    };

    console.log(ricardo);
    const dev = Object.assign({}, ricardo);
    console.log(dev);
    dev.social.twitter = '@changed';
    console.log(dev, ricardo);

    // Poor deep copy
    const dev2 = JSON.parse(JSON.stringify(ricardo));