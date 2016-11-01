var Friend = (function () {
    function Friend(firstName) {
        this._firstName = firstName;
    }
    Object.defineProperty(Friend.prototype, "firstName", {
        get: function () {
            console.log("Get: " + this._firstName);
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
            console.log("Set: " + value);
        },
        enumerable: true,
        configurable: true
    });
    return Friend;
}());
var friend = new Friend("Thomas");
// When you're done, each of these lines should log to the console
friend.firstName = "Angular";
friend.firstName = "Julia";
var firstName = friend.firstName;
