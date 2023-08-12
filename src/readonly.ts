export {};

class visaCard {
    constructor(public readonly owner: string) {}
}

let myVisaCard = new visaCard('Sho');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'Shohei';
