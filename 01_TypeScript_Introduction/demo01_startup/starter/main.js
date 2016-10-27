function sortFriendsByFirstName(friends) {
    var result = friends.slice(0);

    result.sort(function (x, y) {
        return x.firstname.localCompare(y.firstname);
    });

    return result;
}
