class Friend {

    // TODO: Add Accessors for the firstName property, 
    //       so that it logs to the console whenever it is set or get
    firstName: string

    constructor(firstName: string) {
        this.firstName = firstName;
    }
}


let friend = new Friend("Thomas");

// When you're done, each of these lines should log to the console
friend.firstName = "Angular";
friend.firstName = "Julia";
let firstName = friend.firstName;

