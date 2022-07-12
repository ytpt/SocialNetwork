import React from "react";
import classes from "./ProfileInfo.module.css";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

const ProfileDataForm = ({profile, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div><b>Full name</b>:
                {createField("Write your name", "fullName", [], Input)}
            </div>
            <div><b>Looking for a job</b>:
                {createField("", "lookingForAJob", [], Input,
                    {type: 'checkbox'})}
            </div>
            <div><b>My professional skills</b>:
                {createField("Write your skills",
                    "lookingForAJobDescription", [], Textarea)}
            </div>
            <div><b>About me</b>:
                {createField("Write about yourself",
                    "aboutMe", [], Textarea)}
            </div>
            <div><b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <div>
                <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
                </div>
            })}
            </div>
            <div><button className={classes.addBtn}>Save</button></div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;