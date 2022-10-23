// @ts-ignore
interface Product{
    id: number,
    name: string,
    price: number
}

function getProduct(id: number) : Product {
    return {
        id: id,
        name: `Awesome Gadget ${id}`,
        price: 99.5
    }
}

const product = getProduct(1)
console.log(`The product ${product.name} costs $${product.price}`);

let counter: number = 1;
let names: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];
let person: {
    name: string;
    age: number
};

person = {
    name: 'John',
    age: 25
}; // valid

console.log(counter, names, person);

let greeting : (name: string) => string;
greeting = function (name: string) {
    return `Hi ${name}`;
}
console.log(greeting("Jane"))

function increment(counter: number) {
    return ++counter;
}
console.log(increment(1))

let bgColor, headerColor: [number, number, number, number?];
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];
console.log(bgColor, headerColor);

enum Month {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
}

function isItSummer(month: Month) {
    let isSummer: boolean;
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}
console.log(isItSummer(Month.Jun)); // true

// json may come from a third-party API
const json = `{"latitude": 10.11, "longitude":12.12}`;

// parse JSON to find location
const currentLocation = JSON.parse(json);
console.log(currentLocation);
