function getFullName(firstName: string, lastName?: string) {
    if (lastName)
        return `${firstName} ${lastName}`;
    else
        return firstName;
}


console.log(getFullName("Thomas"));;
console.log(getFullName("Thomas", "Huber"));
