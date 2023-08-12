export {};

interface Profile {
    name: string;
    underTwenty: boolean;
    [index: string]: string | number | boolean;
}

let profile: Profile = {name: 'Sho', underTwenty: false};

profile.name = 'Sho';
profile.age = 28;
profile.nationality = 'Japan';
