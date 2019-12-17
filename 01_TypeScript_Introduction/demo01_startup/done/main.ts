interface IFriend {
  firstname: string;
  lastname: string;
}

class Friend implements IFriend {
  firstname: string;
  lastname: string;

  constructor(firstname: string, lastname: string) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  GetFullName(friend: IFriend): string {
    return friend.firstname + ' ' + friend.lastname;
  }
}

function sortFriendsByName(friends: IFriend[]) {
  let result = friends.slice(0);

  result.sort((x, y) => {
    return x.firstname.localeCompare(y.firstname);
  });

  return result;
}

var sortedList: IFriend[];
sortedList = sortFriendsByName([
  { firstname: 'Thomas', lastname: 'Huber' },
  { firstname: 'Sara', lastname: 'Huber' },
  { firstname: 'Julia', lastname: 'Huber' }
]);
console.log(sortedList); // Press F11 or Shift-Ctrl-I in Browser to check Console Output
