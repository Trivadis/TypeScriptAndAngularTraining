// var declarations are scoped in their containing function,
// and not in their containing {}-block

function getNumber(init) {
    if (init) {
        let x = 9;
    }
    return x; // compile error in TypeScript
}
document.write(getNumber(true) + "<br>");
document.write(getNumber(false) + "<br>");