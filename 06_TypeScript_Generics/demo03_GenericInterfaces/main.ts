interface IRepository<T> {
  Load(): T;
  Save(item: T): void;
}

class NumberRepo implements IRepository<number> {
  private _number = 5;
  Load(): number {
    return this._number;
  }
  Save(item: number): void { this._number = item; }

}

let repo = new NumberRepo();
console.log(repo.Load());

repo.Save(13);
console.log(repo.Load());
