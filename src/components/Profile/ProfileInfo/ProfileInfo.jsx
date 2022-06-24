import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
    return <div>
      {/* { <div>
        <img src='http://localhost:3000/img/background.jpg' width='100%' />
      </div> } */}
      <div className={classes.descriptionBlock}>
        <img src={props.profile.photos.large != null ? props.profile.photos.large : 'http://localhost:3000/img/user.png'} width='20%'/>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      </div>
    </div> 
} 

export default ProfileInfo;