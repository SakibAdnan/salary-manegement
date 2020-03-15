import React, { useState } from 'react';
import users from '../../users/users.json';
import UserItem from '../UserItem/UserItem';
import Salary from '../Salary/Salary';
const Users = () => {
    const users15 = users;
    const [user, setUser] = useState(users15);
    const [salary, setSalary] = useState([]);
    const addSalaryHendelar = (userS) => {
        const newSalary = [...salary, userS ];
        setSalary(newSalary);
    }
    return (

        <div className="userList">
            <div>
                <Salary salary={salary}></Salary>
            </div>
            {
                user.map(usr => <UserItem user={usr} addSalaryHendelar={addSalaryHendelar}></UserItem>  )
            }
        </div>
    );
};

export default Users;