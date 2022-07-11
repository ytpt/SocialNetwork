import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/user.png';

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
  if (!profile) {
    return <Preloader />
  }

  const mainPhotoSelectedOn = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

    return <div>
      <div className={classes.descriptionBlock}>
        <img src={profile.photos.large || userPhoto} className={classes.mainPhoto} />
        {/*<img src={profile.photos.large != null*/}
        {/*    ? profile.photos.large : 'http://localhost:3000/img/user.png'} width='20%'/>*/}
        { isOwner && <input type={'file'} onChange={mainPhotoSelectedOn} />}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div> 
} 

export default ProfileInfo;