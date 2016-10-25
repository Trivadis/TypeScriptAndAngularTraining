interface Friend{
    firstName:string;
    lastName?:string;
}

interface FriendPrinter{
    (f:Friend):void
}


function printFriend(printer:FriendPrinter, friend:Friend)
{
    printer(friend);
}

printFriend((f:Friend)=>{console.log(f.firstName)},
   {firstName:"Thomas"});

printFriend((val:Friend)=>{console.log("Value is "+val.firstName);},
   {firstName:"Bill"});