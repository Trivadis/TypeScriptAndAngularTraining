function getFullName(friend) {
    var fullName = friend.firstName;

    if (friend.lastName) {
        fullName += " " + friend.lastName;
    }
    
    return fullName;
}

var fullName = getFullName({ firstName: "Thomas", lastName: "Huber" });
console.log(fullName);

fullName = getFullName({ firstName: "Thomas" });
console.log(fullName);

fullName = getFullName({ firstname: "Bill" }); // lowercase "n" in firstname
console.log(fullName);