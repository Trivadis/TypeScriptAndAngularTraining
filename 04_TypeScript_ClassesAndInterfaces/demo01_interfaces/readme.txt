04_TypeScript_ClassesAndInterfaces\demo01_interfaces
====================================================

1.  Take a look at the main.js file and the function getFullName and the calls to it
    Run the application in the browser (open index.html) and view the output in the console

2.	Rename the main.js-file to .ts


3.	Add a tsconfig.json-file via “tsc -init”-command


4.	Start the TypeScript-watcher via “tsc -w”-command


5.	Introduce a Friend-interface with the properties firstName and lastName and use it for the function's parameter
    interface Friend{
        firstName:string;
        lastName:string;
    }

    function getFullName(friend:Friend)


    Note that interfaces in TypeScript usually don't use the I-prefix like used in C#. But if you want, you could still use it)


6.	Look at the errors TypeScript shows you.


7.	Make the lastName-property optional
    interface Friend{
        firstName:string;
        lastName?:string;
    }

    Now note that the only error you get is the one where firstName is misspelled with a lowercase "n". 
    Now you can fix this:
    fullName = getFullName({firstName:"Bill"});


