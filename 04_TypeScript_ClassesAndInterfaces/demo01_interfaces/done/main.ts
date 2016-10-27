interface Friend {
    firstName: string;
    lastName?: string;
}

function getFullName(friend: Friend) {
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

fullName = getFullName({ firstName: "Bill" }); // lowercase "n" in firstname
console.log(fullName);