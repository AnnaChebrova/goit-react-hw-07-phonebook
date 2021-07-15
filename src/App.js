import React from 'react';
import user from './components/Profile/user.json'
import Profile from './components/Profile/User'

const App = () => {
    return (
        <div>
        <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        />
        </div>
    );
};

export default App;
