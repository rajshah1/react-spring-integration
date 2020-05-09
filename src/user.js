import React from 'react';
import './user.css';

function userObject({name,location,age}) {
    return (
        <div className="mainUser">
            <p className='userField'>{name}</p>
            <p className='userField'>{location}</p>
            <p className='userField'>{age}</p>
        </div>
    );

};

export default userObject;