function getFullName(firstName: string, ...moreNames: string[]) {
    return firstName + " " + moreNames.join(" ");
}

console.log(getFullName("Thomas"));
console.log(getFullName("Thomas", "Claudius", "Huber"));
// ... = ES6 Spread Operator:
console.log(getFullName("Thomas", ...["Bandixen", "Gassmann"])); // just ["Bandixen", "Gassmann"] wouldn't work 
