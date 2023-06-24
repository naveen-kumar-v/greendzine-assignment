import React from 'react'
import UserNotFound from './UserNotFound';

export default function UserList({ users }) {
    if (users.length === 0) {
        return <UserNotFound />;   // If there are no users, render the UserNotFound component
    }
    return (
        <div>
            <ul className='list'>
                {users.map((user) => (
                    <li className='employee' key={user.id}>
                        <span class="empId">{user.id}</span>
                        <div className="image">
                            <img src={user.avatar} alt={user.first_name} />
                        </div>
                        <p className='empName'>{user.first_name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
