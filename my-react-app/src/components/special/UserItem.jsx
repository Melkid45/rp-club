import React from 'react'
import { Link } from 'react-router-dom'

const UserItem = ({ user, id }) => {
    function UserRole() {
        switch (user.role) {
            case 'Admin':
                return 'admin';
            case 'Moderator':
                return 'moderator';
            case 'VIP':
                return 'vip';
            default:
                return '';
        }
    }
    return (
        <Link className='forum--user' to={`/user/${user.id}`}>
            <div className="user--info">
                {user.avatar && (
                    <div className="avatar">
                        {user.avatar}
                    </div>
                )}
                <span className='base-text'>{user.name}</span>
            </div>
            {user.role && (
                <div className={`role base-text ${UserRole()}`}>
                    {user.role}
                </div>
            )}
        </Link>
    )
}

export default UserItem
