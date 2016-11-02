var Friend = (function () {
    function Friend(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Friend.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Friend;
}());
var friend = new Friend("Thomas", "Huber");
console.log(friend.getFullName());
