import react from 'react';
import styles from './Users.module.css';
import userPhoto from '../assets/images/user.png'
import { NavLink } from 'react-router-dom';
import Paginator from "../components/common/Paginator/Paginator";

let Users = (totalUsersCount, pageSize, currentPage, onPageChanged, users, ...props) => {
    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalUsersCount={totalUsersCount} pageSize={pageSize} />
    {
        users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} 
                            className={styles.userPhoto} />
                    </NavLink>
                </div>
                <div>
                    {u.followed 
                        ? <button disabled={props.followingInProgress
                            .some(id => id === u.id)} 
                                onClick={ () => { props.unfollow(u.id) }}>
                        Unfollow</button> 
                        : <button disabled={props.followingInProgress
                            .some(id => id === u.id)} 
                                onClick={ () => { props.follow(u.id) }}>
                        Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
            </span>
    </div>)
    }
</div>
}

export default Users;