04_TypeScript_ClassesAndInterfaces\demo02_interfacesFunctions
=============================================================

1.	Take a look at the main.ts file. And especially at the second call of the printFriend-method
    printFriend((val:number)=>{console.log("Number is " + number);}, {firstName:"Bill"});

    The intention is that the passed function has a friend-parameter. 
    But as you can see on the second printFriend-call, the passed function has a number parameter. Time for a type:


2.	Adjust the printer-parameter of the printFriend-method
    function printFriend(printer:(f:Friend)=>void, friend:Friend)
    {
        printer(friend);
    }

    Now you’ll get an error when you pass in a method that has a different type of parameter than a Friend


3.	Define the function over an interface and note that you get the error as well. The printFriend-method looks more readable
    interface FriendPrinter{
        (f:Friend):void
    }

    function printFriend(printer:FriendPrinter, friend:Friend)
    {
        printer(friend);
    }

