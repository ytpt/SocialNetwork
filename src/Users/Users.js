import React from 'react';
import Paginator from "../components/common/Paginator/Paginator";
import User from "./User";

let Users = (totalUsersCount, pageSize, currentPage, onPageChanged, users, ...props) => {
    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalUsersCount={totalUsersCount} pageSize={pageSize} />
        {
            users.map(u => <User
                user={u}
                key={u.id}
                followingInProgress={props.followingInProgress}
                unfollow={props.unfollow}
                follow={props.follow} /> )
        }
    </div>
}

export default Users;