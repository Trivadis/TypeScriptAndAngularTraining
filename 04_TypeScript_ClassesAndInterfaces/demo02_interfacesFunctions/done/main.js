function printFriend(printer, friend) {
    printer(friend);
}
printFriend(function (f) { console.log(f.firstName); }, { firstName: "Thomas" });
// this second method works, but the intention was that the passed function has a friend-parameter,
// not a number parameter
printFriend(function (val) { console.log("Value is " + val.firstName); }, { firstName: "Bill" });
