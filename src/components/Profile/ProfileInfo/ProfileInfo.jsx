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
        { isOwner &&
          <label for="inputTag" className={classes.addBtn}> Change image
            <input type={'file'} onChange={mainPhotoSelectedOn} />
          </label>
        }
        <div>
          <div><b>Full name</b>: {profile.fullName}</div>
          <div><b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}</div>
          {profile.lookingForAJob &&
            <div>
              <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>
          }
          <div>
            <b>About me</b>: {profile.aboutMe}
          </div>
        </div>

        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div> 
} 

export default ProfileInfo;