interface Friend {
    firstName: string;
    lastName?: string;
}


function printFriend(printer, friend: Friend) {
    printer(friend);
}

printFriend((f: Friend) => { console.log(f.firstName) },
    { firstName: "Thomas" });

// this second method works, but the intention was that the passed function has a friend-parameter,
// not a number parameter
printFriend((val: number) => { console.log("Another one"); },
    { firstName: "Bill" });