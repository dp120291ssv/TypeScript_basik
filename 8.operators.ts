// tsc 8.operators.ts && node 8.operators.js

// Example 1
interface IPerson {
    name: string
    age: number
}

type PersonKeys = keyof IPerson // 'name' | 'age'
let key: PersonKeys = 'name'
key = 'age'

// Example 2
type User = {
    _id: number
    name: string
    email: string
    created: Date
}

type UserKeysWithoutMeta1 = Exclude<keyof User, '_id' | 'created'> // name, email
type UserKeysWithoutMeta2 = Pick<User, 'name' | 'email'> // name, email

let u1: UserKeysWithoutMeta1 = 'name'
// u1 = '_id'



