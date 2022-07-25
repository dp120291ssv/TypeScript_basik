// tsc 4.classes.ts && node 4.classes.js

// Example 1
class TypeScript {
    version: string;

    constructor(version: string){
        this.version = version;
    }

    info(name: string){
        return `[${name}]: TypeScript version is ${this.version}`
    }
}

// Example 2 - change readonly param
class People {
    readonly name: string
    readonly surname: string
    constructor(fakeName: string) {
        this.surname = fakeName
    }
}
// Example 2 - another variant
class People2 {
    readonly name: string
    constructor(readonly surname) {}
}

// Example 3 modifiers
class Animal {
    protected voice: string = ''
    public color: string = 'black'
    private go(){
        console.log('Go')
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }
}

const cat = new Cat();
cat.setVoice('Rrr')
console.log(cat.color)

// Example 4 - Abstract classes
abstract class Component {
    abstract render(): void
    abstract info(): void
}

class AppComponent extends Component {
    render() {
        console.log('Some render')
    }

    info() {
        console.log('Some info')
    }
}





