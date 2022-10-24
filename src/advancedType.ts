// @ts-ignore
interface BusinessPartner {
    name: string;
    credit: number;
}

interface Identity {
    id: number;
    name: string;
}

interface Contact {
    email: string;
    phone: string;
}

type Employee2 = Identity & BusinessPartner & Contact;

let e: Employee2 = {
    id: 100,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(408)-897-5684',
    credit: 1000
};

type Customer2 = BusinessPartner & Contact;

let c: Customer2 = {
    name: 'ABC Inc.',
    credit: 1000000,
    email: 'sales@abcinc.com',
    phone: '(408)-897-5735'
};

type alphanumeric = string | number;

function add(a: alphanumeric, b: alphanumeric) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }

    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }

    throw new Error('Invalid arguments. Both arguments must be either numbers or strings.');
}

class Customer {
    isCreditAllowed(): boolean {
        // ...
        return true;
    }
}

class Supplier {
    isInShortList(): boolean {
        // ...
        return true;
    }
}

type BusinessPartner2 = Customer | Supplier;
function isCustomer(partner: any): partner is Customer {
    return partner instanceof Customer;
}
function signContract(partner: BusinessPartner2): string {
    let message: string;
    if (isCustomer(partner)) {
        message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    } else {
        message = partner.isInShortList() ? 'Sign a new contract the supplier' : 'Need to evaluate further';
    }

    return message;
}
let c2 = new Customer();
console.log(signContract(c2))
let s2 = new Supplier();
console.log(signContract(s2))

if (typeof window === 'object') {
    let input = document.querySelector('input[type="text"]') as HTMLInputElement;
    console.log(input.value);

}

function getNetPrice(price: number, discount: number, format: boolean): number | string {
    let netPrice = price * (1 - discount);
    return format ? `$${netPrice}` : netPrice;
}
let netPrice = getNetPrice(100, 0.05, true) as string;
console.log(netPrice);

let netPrice2 = getNetPrice(100, 0.05, false) as number;
console.log(netPrice2);

let netPrice3 = <number>getNetPrice(100, 0.05, false);
console.log(netPrice3);

