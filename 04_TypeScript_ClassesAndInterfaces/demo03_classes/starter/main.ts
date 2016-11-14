// TODO: Create a class that takes
//       firstname, lastName as constructor-parameter
//       and that has a getFullName-method

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