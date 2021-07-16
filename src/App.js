import React from 'react';
import user from './components/Profile/user.json'
import Profile from './components/Profile/User'
import Statistics from './components/Statistics/Statistics'
import statistics from './components/Statistics/statistical-data.json'
import FriendList from './components/FriendList/FriendList'
import friends from './components/FriendList/friends.json'
import transaction from './components/TransactionHistory/transactions.json'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'

const App = () => {
    return (
        <>
        <div>
        <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        />
        </div>

        <div>
        <Statistics
        title={statistics.title}
        stats={statistics.label}
        />
        </div>

        <div>
        <FriendList
        name={friends.name}
        isOnline={friends.isOnline}
        avatar={friends.avatar}
        />
        </div>

         <div>
        <TransactionHistory
        type={transaction.type}
        amount={transaction.amount}
        currency={transaction.currency}
        />
        </div>
        </>
    );
};

export default App;
