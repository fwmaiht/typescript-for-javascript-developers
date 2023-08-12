export {};

class Person {
    constructor(public name: string, protected age: number) {}
}

const me = new Person('Sho', 33);
console.log(me);
