// tsc 3.enum.ts && node 3.enum.js
enum Membership {
    Simple,
    Regular,
    Premium
}

const membership = Membership.Premium
const membershipReverse = Membership[1]
console.log(membership)
console.log(membershipReverse)

enum Social {
    LINKEDIN = 'LINKEDIN',
    FACEBOOK = 'FACEBOOK'
}

const social = Social.LINKEDIN
console.log(social)
