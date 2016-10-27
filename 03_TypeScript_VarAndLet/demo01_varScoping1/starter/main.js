// var declarations are scoped in their containing function,
// and not in their containing {}-block

function getNumber(init) {
    if (init) {
        var x = 9;
    }
    return x;
}
document.write(getNumber(true) + "<br>");
document.write(getNumber(false) + "<br>");