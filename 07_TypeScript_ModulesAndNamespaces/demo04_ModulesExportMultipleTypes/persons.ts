interface Names {
    firstName: string;
    lastName: string;
}

class Person implements Names {
    constructor(public firstName: string, public lastName: string) { }
}
export { Person as Friend, Names }