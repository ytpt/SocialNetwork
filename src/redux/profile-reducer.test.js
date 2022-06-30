import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: '15'},
        {id: 2, message: 'It`s my first post', likesCount: '20'},
        {id: 3, message: 'I`m sick and tired', likesCount: '2000'},
        {id: 4, message: 'STOP WAR', likesCount: '1000000'}
    ]
}

test('length of posts should be incremented', () => {
    //1) Готовим исходные данные
    let action = addPostActionCreator('Annarchive');
    //2) Action
    let newState = profileReducer(state, action);
    //3) Проверка ожиданий
    expect(newState.posts.length).toBe(5);
});

test('message of new post should be correct', () => {
    let action = addPostActionCreator('Annarchive');
    let newState = profileReducer(state, action);
    expect(newState.posts[4].message).toBe('Annarchive');
});

test('after deleting length of messages should be decremented', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3);
});
