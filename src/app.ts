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

let i = 0;
for (; ;) {
    console.log(i);
    i++;
    if (i > 9) break;
}

console.log("------------");
counter = 0;

while (counter < 5) {
    console.log(counter);
    counter++;
}

console.log("------------");
i = 0;

do {
    console.log(i);
    i++
} while (i < 10);


console.log("------------");
function multiply(a: number, b: number, c?: number): number {

    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}
console.log(multiply(5, 2, 3));
console.log(multiply(5, 2));

console.log("------------");
function applyDiscount(price: number, discount: number = 0.05): number {
    return price * (1 - discount);
}

console.log(applyDiscount(100));
console.log(applyDiscount(100, 0.1));

console.log("------------");
function getTotal(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}
console.log(getTotal()); // 0
console.log(getTotal(10, 20)); // 30
console.log(getTotal(10, 20, 30)); // 60

console.log("------------");

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
    return a + b;
}

console.log(add(10, 20));
console.log(add("10", "20"));
console.log("------------");