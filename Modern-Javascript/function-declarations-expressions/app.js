//  FUNCTION DECLARATIONS

function greet(firstName, lastName){
    // console.log('Hello')
    return 'Hello ' + firstName + ' ' + lastName;
}

// console.log(greet('John', 'Doe'));

// FUNCTION EXPRESSIONS

const square = function(x){
    return x*x;
};

// console.log(square(8));


// IMMIDIATELY INVOKABLE FUNCITON EXPRESSIONS - ALSO CALLED - IIFEs

// (function(){
//     console.log('IIFE Ran..')
// })();

// (function(name){
//     console.log('Hello ' + name)
// })('Brad');

// PROPERTY METHODS

const todo = {
    add: function(){
        console.log('Add todo..');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`)
    }
}
todo.delete = function(){
    console.log('Delete todo...')
}
todo.add();
todo.edit(22);
todo.delete()