import React, {useState} from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/user.png';
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

  const [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />
  }

  const mainPhotoSelectedOn = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  const onSubmit = (formData) => {
      saveProfile(formData);
      //setEditMode(false);
  }

    return <div>
      <div className={classes.descriptionBlock}>
        <img src={profile.photos.large || userPhoto} className={classes.mainPhoto} />
        { isOwner &&
          <label for="inputTag" className={classes.addBtn}> Change image
            <input type={'file'} onChange={mainPhotoSelectedOn} />
          </label>
        }
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        { editMode
            ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
            : <ProfileData profile={profile} isOwner={isOwner}
                           goToEditMode={ () => {setEditMode(true)}} /> }
      </div>
    </div> 
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
  return (
      <div className={classes.profileInfo}>
          <div>
                { isOwner && <div><button
                    onClick={goToEditMode}
                    className={classes.addBtn}>Edit</button></div>
                }
          </div>
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
                <div>
                  <b>Contacts</b>: {Object.keys(profile.contacts).map(key => { return <Contact
                    key={key}
                    contactTitle={key}
                    contactValue={profile.contacts[key]} />
                })}
                </div>
          </div>
      </div>
  )
}

const Contact = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;