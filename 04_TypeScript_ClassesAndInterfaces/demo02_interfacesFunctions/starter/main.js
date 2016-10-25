function printFriend(printer, friend) {
    printer(friend);
}
printFriend(function (f) { console.log(f.firstName); }, { firstName: "Thomas" });
// this second method works, but the intention was that the passed function has a friend-parameter,
// here it has no parameter, as you can see with the lambda
printFriend(function () { console.log("Another one"); }, { firstName: "Bill" });
