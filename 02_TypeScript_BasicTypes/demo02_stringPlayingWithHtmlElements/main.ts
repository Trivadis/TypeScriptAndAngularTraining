function onKeyUp() {
  // Grab the input element and its value
  let input = document.getElementById("myInput");
  let firstname = input.value;

  // Grab the output element
  let output = document.getElementById("myOutput");

  // assign the message to the span-element’s innerText-property
  output.innerText = `Hi ${firstname},
your firstname length is ${firstname.trim().length}!`;
}