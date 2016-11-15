03_TypeScript_VarAndLet\demo01_varScoping1
==========================================

1.	Open the folder in Visual Studio code and look at the main.js-file
	Note that the x-variable is declared inside the function block. That's because var-declarations are 
	scoped in their containing function, module or namespace


2.	Run the sample and look at the output.
	You'll see that the values "9" and "undefined" are written to the document


3.	Change var to let


4.	Run it again.
	There's no output anymore in the browser window. 
	Look at the error in the console (F12 in most browsers). Note that this is a runtime error in JavaScript.


5.	Change the main.js-file to main.ts. Note that you get now a compile-time error and even a red squiggle in your editor


Welcome to TypeScript. That's the power of TypeScript! ;-)