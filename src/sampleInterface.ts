// @ts-ignore
interface Person {
    firstName: string;
    middleName?: string;
    lastName: string;
}

function getFullName(person: Person) {
    if (person.middleName) {
        return `${person.firstName} ${person.middleName} ${person.lastName}`;
    }
    return `${person.firstName} ${person.lastName}`;
}


let john1 = {
    firstName: 'John',
    lastName: 'Doe'
};

console.log(getFullName(john1));

let jane2 = {
    firstName: 'Jane',
    middleName: 'K.',
    lastName: 'Doe',
    age: 22
};
let fullName = getFullName(jane2);
console.log(fullName); // Jane Doe

interface StringFormat {
    (str: string, isUpper: boolean): string
}

let format: StringFormat;

format = function (src: string, upper: boolean) {
    return upper ? src.toLocaleUpperCase() : src.toLocaleLowerCase();
};

console.log(format('hi', true));

let lowerCase: StringFormat;
lowerCase = function (str: string) {
    return str.toLowerCase();
}

console.log(lowerCase('Hi', false));

interface Json {
    toJson(): string
}

class Person2 implements Json {
    constructor(private firstName: string,
                private lastName: string) {
    }
    toJson(): string {
        return JSON.stringify(this);
    }
}
let person = new Person2('John', 'Doe');
console.log(person.toJson());

interface Mailable {
    send(email: string): boolean
    queue(email: string): boolean
}
interface FutureMailable extends Mailable {
    later(email: string, after: number): boolean
}
class Mail implements FutureMailable {
    later(email: string, after: number): boolean {
        console.log(`Send email to ${email} in ${after} ms.`);
        return true;
    }
    send(email: string): boolean {
        console.log(`Sent email to ${email}`);
        return true;
    }
    queue(email: string): boolean {
        console.log(`Queue an email to ${email}.`);
        return true;
    }
}

let mail = new Mail();
mail.later("test@gmail.com", 1)
mail.send("test@gmail.com")
mail.queue("test@gmail.com",)