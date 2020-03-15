import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './UserItem.css'
const UserItem = (props) => {
    const {name, position, email, salary, img, desc} = props.user;
    return (
        <div className="user-item">
            <div className="user-image">
                <img src={img} alt=""/>
            </div>
            <div className="uer-info">
                <h2>{name}</h2>
                <h3>{position}</h3>
                <p>{email}</p>
                <p>${salary}</p>
                <p>{desc}</p>
                <button onClick= {() => props.addSalaryHendelar(props.user)} className="box-btn"><FontAwesomeIcon icon={faPlus} /> Pay Now</button>
            </div>
        </div>
    );
};

export default UserItem;