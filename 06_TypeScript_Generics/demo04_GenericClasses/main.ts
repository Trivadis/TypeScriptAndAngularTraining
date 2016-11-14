interface IRepository<T> {
  Load(): T;
  Save(item: T): void;
}

class GenericRepo<T> implements IRepository<T> {
  private _store: T;
  constructor(initialValue: T) {
    this._store = initialValue;
  }
  Load(): T {
    return this._store;
  }
  Save(item: T): void { this._store = item; }
}

let repo = new GenericRepo<number>(5);
console.log(repo.Load());

repo.Save(13);
console.log(repo.Load());



