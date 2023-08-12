export {};

const kansu = (): number => 33;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;

if (typeof numberUnknown === 'number') {
    let sumUnknown = numberUnknown + 10;
}
