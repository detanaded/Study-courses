const person = {
    firstName: 'Ernie',
    lastName: 'Hernandez',
    age: 30,
    email: 'erniedabest@toocool4u',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Miami',
        state: 'FL'
    },
    getBirthYear: function(){
        return 2020 - this.age;
    }
}

let val;
val = person;
// Get specific value
val = person.firstName;
val = person ['firstName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val =person.address['city'];
val = person.getBirthYear()

console.log(val);

const people = [
    {name: 'Ernie',
age: 29,},
    {name: 'Dom', age: 29}
];

for(let i = 0; i < people.length; i++){
    console.log(people[i].name);
}

