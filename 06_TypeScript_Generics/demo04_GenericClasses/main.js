var NumberRepo = (function () {
    function NumberRepo() {
        this._number = 5;
    }
    NumberRepo.prototype.Load = function () {
        return this._number;
    };
    NumberRepo.prototype.Save = function (item) { this._number = item; };
    return NumberRepo;
}());
var repo = new NumberRepo();
console.log(repo.Load());
repo.Save(13);
console.log(repo.Load());
