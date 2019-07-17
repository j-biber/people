import React from 'react';
import './UserCard.css';
import PropTypes from 'prop-types';


const UserCard = ({ gender, picture, fullName, email, dob }) => {
    return (
        <li
            className={gender === 'female' ? 'card genderColor' : 'card'}
        >
            <img src={picture} className="card-img-top" alt="..." />
            <div className="card-body">
                <div className="username">{fullName}</div>
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

UserCard.propTypes = {
    gender: PropTypes.string.isRequired,
    picture: PropTypes.string,
    fullName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    dob: PropTypes.string
}

UserCard.defaultProps = {
    picture: 'https://via.placeholder.com/300.png?text=User+Image',
    dob: 'User did not provide its date of birthday'
}



export { UserCard }