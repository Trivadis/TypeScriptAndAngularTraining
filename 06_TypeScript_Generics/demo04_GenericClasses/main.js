var GenericRepo = (function () {
    function GenericRepo(initialValue) {
        this._store = initialValue;
    }
    GenericRepo.prototype.Load = function () {
        return this._store;
    };
    GenericRepo.prototype.Save = function (item) { this._store = item; };
    return GenericRepo;
}());
var repo = new GenericRepo(5);
console.log(repo.Load());
repo.Save(13);
console.log(repo.Load());
