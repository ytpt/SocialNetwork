import React from 'react';
import Paginator from "../components/common/Paginator/Paginator";
import User from "./User";

let Users = (totalItemsCount, pageSize, currentPage, onPageChanged, users, ...props) => {
    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalItemsCount={totalItemsCount} pageSize={pageSize} />
        <div>
            {
                users.map(u => <User user={u} key={u.id}
                    followingInProgress={props.followingInProgress}
                    unfollow={props.unfollow} follow={props.follow}/>)
            }
        </div>
    </div>
}

export default Users;