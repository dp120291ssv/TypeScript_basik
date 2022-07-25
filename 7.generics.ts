// tsc 7.generics.ts && node 7.generics.js

const arrayOfNumbers: Array<number> = [1, 1, 3, 5]
const arrayOfStrings: Array<string> = ['red', 'black', 'white', 'green']

function reverse<T>(array: T[]): T[]{
    return array.reverse();
}

reverse(arrayOfNumbers)
reverse(arrayOfStrings)