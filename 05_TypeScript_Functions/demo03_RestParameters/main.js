function getFullName(firstName) {
    var moreNames = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        moreNames[_i - 1] = arguments[_i];
    }
    return firstName + " " + moreNames.join(" ");
}
console.log(getFullName("Thomas"));
console.log(getFullName("Thomas", "Claudius", "Huber"));
