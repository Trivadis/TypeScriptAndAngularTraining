class Animal {
    constructor(public name: string) { }
}
class Frog extends Animal {
    constructor(name: string, public distance: number) {
        super(name);
    }
    jump() {
        console.log(`the frog ${this.name} is jumping ${this.distance}m`);
    }
}

let frog = new Frog("Kermit", 1);
frog.jump();