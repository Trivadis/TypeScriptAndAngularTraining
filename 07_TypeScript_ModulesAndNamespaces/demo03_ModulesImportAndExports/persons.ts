export interface Names {
    firstName: string;
    lastName: string;
}

export class Person implements Names {
    constructor(public firstName: string, public lastName: string) { }
}