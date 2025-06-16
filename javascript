// array de frutas
const fruits = ['mango', 'papaya', 'pinneapple', 'apple']; 

// funcion callback que sera argumento del metodo forEach
const fruit = (element) => {
    return console.log('I want to eat a ' + element);
}


fruits.forEach(fruit);// Output: I want to eat a mango, etc
