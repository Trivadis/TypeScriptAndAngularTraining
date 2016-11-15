03_TypeScript_VarAndLet\demo02_varScoping2
==========================================

1.	Take a look at the main.js file


2.	Run the application and note that the output is 5 5 5 5 5 and not 0 1 2 3 4 5


3.	Use a JavaScript-workaround: an inline function expression
    function writeToBody()
    {
        for(var i = 0;i<5;i++)
        {
            (function(i)
            {
                setTimeout(function() {
                    document.write(i+"<br>");
                }, 200);
            })(i);
        }
    }

Note that the output is now 0 1 2 3 4, as the inline function expression is called immediately and the parameter is scoped to the function expression.


4.	Remove the function-expression again and use let instead of var
    Now you get also the output 0 1 2 3 4