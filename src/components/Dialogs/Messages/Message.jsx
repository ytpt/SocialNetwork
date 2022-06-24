import React from 'react';
import classes from './../Dialogs.module.css';

const Message = (props) => {
    return (
        <div className={classes.dialog}>
            <p className={classes.dialogMessage}>{props.message}</p>
        </div>
    )
}

export default Message;