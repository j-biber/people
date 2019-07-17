import React from 'react';
import './UserItem.css';
import PropTypes from 'prop-types';

const UserItem = ({ gender, picture, fullName, email, dob }) => {
    return (
        <li
            className={gender === 'female' ? 'media my-4 genderColor' : 'media my-4'}
        >
            <img src={picture} className="mr-3" alt="..." />
            <div className="media-body">
                <div className="username">Name: {fullName}</div>
                <div className="email-address">
                    <i className="fas fa-envelope"></i>
                    {email}
                </div>
                <div className="dob">
                    <i className="fas fa-birthday-cake"></i>
                    {dob}
                </div>
            </div>
        </li>
    )
}

UserItem.propTypes = {
    gender: PropTypes.string.isRequired,
    picture: PropTypes.string,
    fullName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    dob: PropTypes.string
}

UserItem.defaultProps = {
    picture: 'https://via.placeholder.com/300.png?text=User+Image',
    dob: 'User did not provide its date of birthday'
}

export { UserItem }