04_TypeScript_ClassesAndInterfaces\demo03_classes
=================================================

1.	Take a look at the main.ts file. 


2. Create a Friend class with two properties. One should be optional
    class Friend {
        firstName: string;
        lastName?: string;
    }


3. Add a constructor to the Friend class and assign the constructor parameters to the local members.
    constructor(firstName: string, lastName?: string)
    {
        this.firstName = firstName;
        this.lastName = lastName;
    }


4. Add the "getFullName" method to the class
    getFullName(): string {
         return `${this.firstName} ${this.lastName}`;
    }


5. Change the calling code 
    let friend = new Friend("Thomas","Huber");
    console.log(friend.getFullName());