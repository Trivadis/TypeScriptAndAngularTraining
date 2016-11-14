function getFullName(firstName: string, ...moreNames: string[]) {
    return firstName + " " + moreNames.join(" ");
}

console.log(getFullName("Thomas"));
console.log(getFullName("Thomas", "Claudius", "Huber"));
console.log(getFullName("Thomas", ...["Bandixen", "Gassmann"])); // just ["Bandixen", "Gassmann"] wouldn't work 
