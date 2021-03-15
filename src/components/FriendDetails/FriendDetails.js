import React from 'react';
import { useParams } from 'react-router';

const FriendDetails = () => {
    const {FriendId} = useParams();
    return (
        <div>
            <h1>This is friend details components. {FriendId}</h1>
        </div>
    );
};

export default FriendDetails;