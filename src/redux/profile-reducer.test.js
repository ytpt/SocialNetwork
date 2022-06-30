import profileReducer, {addPostActionCreator} from "./profile-reducer";

test('length of posts should be incremented', () => {
    //1) Готовим исходные данные
    let action = addPostActionCreator('Annarchive');
    let state = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: '15'},
            {id: 2, message: 'It`s my first post', likesCount: '20'},
            {id: 3, message: 'I`m sick and tired', likesCount: '2000'},
            {id: 4, message: 'STOP WAR', likesCount: '1000000'}
        ]
    }
    //2) Action
    let newState = profileReducer(state, action);

    //3) Проверка ожиданий
    expect(newState.post.length).toBe(5);
});
