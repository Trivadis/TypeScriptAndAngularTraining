interface IName {
  name: string;
}

class GenericPrinter<T extends IName> {
  print(item: T) {
    console.log(item.name);
  }
}

let printer = new GenericPrinter();
printer.print({ name: "Thomas" });

// printer.print("Hello"); // Error, no name-property
