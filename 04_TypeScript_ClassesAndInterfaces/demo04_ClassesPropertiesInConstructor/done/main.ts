class Friend {
    constructor(public firstName:string,public lastName?:string)
    {
    }

    getFullName():string {
         return `${this.firstName} ${this.lastName}`;
    }
}


let friend = new Friend("Thomas","Huber");
console.log(friend.getFullName());