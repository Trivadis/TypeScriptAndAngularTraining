class Friend {
    private _firstName:string;
    get firstName():string
    {
        console.log("Get: "+this._firstName);
       return this._firstName;
    }
    set firstName(value:string)
    {
        this._firstName = value;
        console.log("Set: "+value);
    }
    
    constructor(firstName:string)
    {
        this._firstName = firstName;
    }
}


let friend = new Friend("Thomas");

// When you're done, each of these lines should log to the console
friend.firstName = "Angular";
friend.firstName = "Julia";
let firstName = friend.firstName;

