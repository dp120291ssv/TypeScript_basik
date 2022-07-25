// tsc 2.interfaces.ts && node 2.interfaces.js

// Example 1 - Interface
interface People {
    readonly id: string
    name?: string
    data: {
        age: number
        city: string
    }
}

const people: People = {
    id: '123',
    data: {
        age: 31,
        city: 'Test'
    }
}

people.name = 'TestName';

const people2 = {} as People;
const people3 = <People>{};

// Example 2 - Interface inheritance
interface SpeakingPeople extends People {
    sayHello: () => string;
}

const people4: SpeakingPeople = {
    id: '123',
    data: {
        age: 31,
        city: 'Test'
    },
    sayHello(): string {
        return 'Hello TS'
    }
};

// Example 3 - Interface for Class
interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date();
    setTime(date: Date) {
        this.time = date;
    }
}

// Example 4 - Interface for dynamic key
interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid black',
    margin: '10px',
    borderRadius: '2px'
}

