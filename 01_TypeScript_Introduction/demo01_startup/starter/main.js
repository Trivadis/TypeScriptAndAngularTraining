function sortFriendsByName(friends) {
    var result = friends.slice(0);

    result.sort(function (x, y) {
        return x.firstName.localCompare(y.firstName);
    });

    return result;
}
