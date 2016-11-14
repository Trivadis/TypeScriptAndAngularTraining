class NameDisplayer {
    public loadedName: string

    Load() {
        loadData(
            // Look at the output in the console. loadedName is undefined!!
            // Replace the function call below with an arrow function, 
            // so that "this" is captured and points to the NameDisplayer-instance
            function (name: string) { this.loadedName = name }
        );
    }
}

function loadData(callback: (name: string) => void) {
    callback("Thomas");
}

var x = new NameDisplayer();
x.Load();
console.log(x.loadedName);
