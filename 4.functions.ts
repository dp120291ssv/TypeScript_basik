// tsc 4.functions.ts && node 4.functions.js

// Example 1
function add(a: number, b: number): number {
    return a + b;
}

// Example 2
function toUpperCase(a: string): string {
    return a.trim().toUpperCase();
}

// Example 3
interface MyPosition {
    x: number | undefined
    y: number | undefined
}

interface MyDefaultPosition extends MyPosition {
    default: string
}

function position(): MyPosition
function position(a: number): MyDefaultPosition
function position(a: number, b: number): MyPosition

function position(a?: number, b?: number){
    if (!a && !b){
        return {x: undefined, y: undefined}
    }

    if(a && !b){
        return {x: a, y: undefined, default: a.toString()}
    }

    return {x: a, y: b}
}

console.log('Empty: ', position())
console.log('One param: ', position(33))
console.log('Two param: ', position(33, 44))

