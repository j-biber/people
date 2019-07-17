import React from 'react';
import { UserCard } from './UserCard/UserCard';
import { UserItem } from './UserItem/UserItem';

const UserList = ({ isGrid, users }) => {

    const userListItems = users.map((user, index) => {

        const { gender, picture: { large, thumbnail }, fullName, emailEncrypted, dob } = user;

        if (isGrid) {
            return (
                <UserCard
                    key={index}
                    gender={gender}
                    picture={large}
                    fullName={fullName}
                    email={emailEncrypted}
                    dob={dob}
                />
            )
        }
        else {
            return (
                <UserItem
                    key={index}
                    gender={gender}
                    picture={thumbnail}
                    fullName={fullName}
                    email={emailEncrypted}
                    dob={dob}
                />
            )
        }

    });

    return (
        <ul className={isGrid ? 'grid' : 'list'}>
            {userListItems}
        </ul>
    )
}

export { UserList }
