import { JusticeLeagueMember } from '../interfaces/justice-league-member';


const JUSTICE_LEAGUE_MEMBERS: JusticeLeagueMember[] = [
    {
        name: 'Superman',
        alias: 'Clark Kent',
        age: 41,
        currentMember: true,
        memberSince: new Date('10/25/1947'),
        powers: ['Flight', 'Invulnerability', 'Heat Vision']
    },
    {
        name: 'Batman',
        alias: 'Bruce Wayne',
        age: 39,
        currentMember: true,
        memberSince: new Date('10/25/1947'),
        powers: ['None']
    },
    {
        name: 'Wonder Women',
        alias: 'Diana Prince',
        age: 35,
        currentMember: true,
        memberSince: new Date('10/25/1947'),
        powers: ['Flight', 'Invulnerability', 'Lasso of Truth']
    },
    {
        name: 'Green Lantern',
        alias: 'Hal Jordan',
        age: 37,
        currentMember: false,
        memberSince: new Date('04/07/1955'),
        powers: ['Ring']
    },
    {
        name: 'Flash',
        alias: 'Barry Allen',
        age: 29,
        currentMember: false,
        memberSince: new Date('09/06/1962'),
        powers: ['Speed', 'Time Travel']
    }
];

export {JUSTICE_LEAGUE_MEMBERS};
