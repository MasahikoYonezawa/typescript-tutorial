// @ts-ignore

function getRandomElement<T>(items: T[]): T {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

let numbers = [1, 5, 7, 4, 2, 9];
let randomEle = getRandomElement(numbers);
console.log(randomEle);

let colors = ['red', 'green', 'blue'];
let returnElem: string;
returnElem = getRandomElement(colors);
console.log(returnElem);

function merge<U extends object, V extends object>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    };
}

let person2 = merge(
    { name: 'John' },
    { age: 25 }
);

console.log(person2);

function prop<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let str = prop({ name: 'John' }, 'name');
console.log(str);


class Stack<T> {
    private elements: T[] = [];

    constructor(private size: number) {
    }
    isEmpty(): boolean {
        return this.elements.length === 0;
    }
    isFull(): boolean {
        return this.elements.length === this.size;
    }
    push(element: T): void {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overflow!');
        }
        this.elements.push(element);

    }
    pop(): T {
        if (this.elements.length === 0) {
            throw new Error('The stack is empty!');
        }
        return this.elements.pop() as T;
    }
}
function randBetween(low: number, high: number): number {
    return Math.floor(Math.random() * (high - low + 1) + low);
}
let numbers2 = new Stack<number>(5);

while (!numbers2.isFull()) {
    let n = randBetween(1, 10);
    console.log(`Push ${n} into the stack.`)
    numbers2.push(n);
}

while (!numbers2.isEmpty()) {
    let n = numbers2.pop();
    console.log(`Pop ${n} from the stack.`);
}

interface Pair<K, V> {
    key: K;
    value: V;
}
let month: Pair<string, number> = {
    key: 'Jan',
    value: 1
};

console.log(month);

interface Collection<T> {
    add(o: T): void;
    remove(o: T): void;
}
class List<T> implements Collection<T>{
    private items: T[] = [];

    add(o: T): void {
        this.items.push(o);
    }
    remove(o: T): void {
        let index = this.items.indexOf(o);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }
    getItems(): T {
        return this.items as T;
    }
}
let list = new List<number>();

for (let i = 0; i < 10; i++) {
    list.add(i);
}
console.log(list.getItems())

