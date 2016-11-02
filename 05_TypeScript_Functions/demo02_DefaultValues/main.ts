function getFullName(firstName: string ="Thomas", lastName?: string) {
    if (lastName)
        return `${firstName} ${lastName}`;
    else
        return firstName;
}


console.log(getFullName()); // OK, prints "Thomas"
console.log(getFullName("Thomas","Huber"));
