import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name='newPostText'
                    validate={ [required, maxLength10] }
                />
            </div>
            <button className={classes.addBtn}>Add post</button>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

const MyPosts = (props) => {
  let postsElements = 
    props.posts.map( p => 
      <Post message={p.message} like={p.likesCount} />);

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <AddNewPostFormRedux onSubmit={onAddPost} />
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  )
}

const maxLength10 = maxLengthCreator(10);

export default MyPosts;