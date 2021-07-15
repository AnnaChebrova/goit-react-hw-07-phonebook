import React from 'react';
import user from './components/Profile/user.json'
import Profile from './components/Profile/User'
import Statistics from './components/Statistics/Statistics'
import statistics from './components/Statistics/statistical-data.json'

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
        </>
    );
};

export default App;
