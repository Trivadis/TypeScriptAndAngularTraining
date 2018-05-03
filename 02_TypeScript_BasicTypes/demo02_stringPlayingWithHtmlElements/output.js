function onKeyUp() {
    // Grab the input element and its value
    var input = document.getElementById("test");
    var firstname = input.value;
    // Grab the output element
    var output = document.getElementById("myOutput");
    // assign the message to the span-element’s innerText-property
    output.innerText = "Hi " + firstname + ",\nyour firstname length is " + firstname.trim().length + "!";
}
