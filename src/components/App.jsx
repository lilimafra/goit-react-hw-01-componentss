import { Profile } from './Profile/Profile';
import user from './json/user.json';

import { Statistics } from './Statistics/Statistics';
import data from './json/data.json';

import { FriendList } from 'components/Friends/Friends';
import listOfFriends from './json/friends.json';

import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import transaction from './json/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={listOfFriends}></FriendList>
      <TransactionHistory transactions={transaction} />
    </div>
  );
};
