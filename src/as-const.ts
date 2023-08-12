export {};

let name = 'Sho';

name = 'Ham';

let nickname = 'Ham' as const;
nickname = 'Ham';

let profile = {
    name: 'Sho',
    height: 168
} as const;

// profile.name = 'Ham';
// profile.height = 180;
