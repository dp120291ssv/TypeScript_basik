// tsc 1.types.ts && node 1.types.js

// Boolean
const isFetching: boolean = true;
const isLoading: boolean = false;

// Number
const int: number = 123;
const float: number = 12.3;
const num: number = 12e3;

// String
const message: string = "test";

// Array
const numberArray: number[] = [1,2,3];
const stringArray: Array<string> = ['1','2','3'];

// Tuple
const info: [string, number] = ['test', 123]

// Any
let some: any = 123
some = 'test'

// === Function typing
function check(name: string): void {
    console.log(name);
}

// Custom types
type ID = string | number;
const num1: ID = 1;
const str1: ID = "1";

// Null, Undefined
type initial = undefined | null;
let a: initial;