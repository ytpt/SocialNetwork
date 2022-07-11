import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {savePhoto} from "../../redux/profile-reducer";

const Profile = (props) => {
    return <div>
        <ProfileInfo
          savePhoto={props.savePhoto}
          isOwner={props.isOwner}
          profile={props.profile} 
          status={props.status} 
          updateStatus={props.updateStatus} />
        <MyPostsContainer />
      </div>
}

export default Profile;