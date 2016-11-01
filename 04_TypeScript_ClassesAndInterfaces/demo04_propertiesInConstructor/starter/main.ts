// TODO: Change this class to define the properties firstName
//       and lastName directly in the constructor

class Friend {
    firstName: string;
    lastName?: string;

    constructor(firstName:string,lastName?:string)
    {
        this.firstName= firstName;
        this.lastName = lastName;
    }

    getFullName():string {
         return `${this.firstName} ${this.lastName}`;
    }
}


let friend = new Friend("Thomas","Huber");
console.log(friend.getFullName());