export {};

namespace Japanese {
    export namespace Tokyo {
        export class Person {
            constructor(public name: string) {}
        }
    }

    export namespace Osaka {
        export class Person {
            constructor(public name: string) {}
        }
    }
}

namespace English {
    export class Person {
        constructor(public firstName: string) {}
    }
}

const me = new Japanese.Tokyo.Person('Sho');
console.log(me.name);
const me2 = new Japanese.Osaka.Person('Shoo');
console.log(me2.name);

const michael = new English.Person('Michael');
console.log(michael.firstName);
