class NameDisplayer {
    public loadedName: string

    Load() {
        loadData(
            (name: string) => { this.loadedName = name }
        );
    }
}

function loadData(callback: (name: string) => void) {
    callback("Thomas");
}

var x = new NameDisplayer();
x.Load();
console.log(x.loadedName);
