export {};

class Me {
    static isProgrammer: boolean = true;
    static firstName: string = 'Sho';
    static lastName: string = 'Yoshimoto';

    static work() {
        return `Hey, guys! This is ${this.firstName}! Are you interested in TypeScript? Let\'s dive into TypeScript!`;
    }
}

// let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());
