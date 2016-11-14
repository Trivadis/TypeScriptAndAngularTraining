1. 	Start Visual Studio Code from the starter directory with "code .".
	Note: You don't have any tooling for the .js-file. And you can even call it with just an "x":
	Add sortFriendsByName ('x'); at the end of the file


2.	Change the file main.js to main.ts


3.	Introduce the Friend-interface and make the parameter of the method a Friend-array
	interface IFriend {
   		firstname:string;
   		lastname:string,
	}


4.	Note that you have two errors now:
	a.	One where you call localCompare instead of localeCompare
	b.	One where you pass the "x" to the sortFriendsByName-method


5.	Fix the errors and note that you get intellisense when you access the friend type to grab its firstname-property


6.	Use a lambda function
	result.sort((x,y)=> {
        	return x.firstname.localeCompare(y.firstname);
    	});


7.	Note that you also get intellisense when you pass arguments to the function
	sortFriendsByName([{firstname:"Thomas",lastname:"Gassmann" }]);


8.	Open a cmd (or command window in Visual Studio Code CTRL+!) and type 
	tsc -w main.ts
	
	This will start the TypeScript-Compiler (tsc) in watch-mode for the main.ts-file.
	Now you have a generated main.js file, and everytime you change the main.ts, the main.js will be re-generated.


9.	Now add a class to the main.ts and view the output in the main.js-file
	class Friend implements IFriend
	{
    		firstName:string;
    		lastName:string;
    		GetFullName(friend:IFriend):string
    		{
        		return friend.firstname +' ' + friend.lastname;
    		}
	}

	Look at the output. It�s the typical JavaScript-prototype stuff to create some kind of class


10.	Add a tsconfig.json-file by going to the console and type
	tsc -init


11.	Start the TypeScript-compiler in watch-mode again. Just type in 
	tsc -w


12.	Adjust the compiler-options in tsconfig.json to compile to es6 instead of es5
	"target": "es5",        ==>        "target": "es6",


Note that the generated code has now a real class and the lambda-function, as these features are part of ecmascript2015/ES6. 
You can change it back to "es5" and the generated code will be again ES5-Standard.