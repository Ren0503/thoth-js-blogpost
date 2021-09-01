import {combineReducers} from 'redux';

import {
    userLoginReducer,
    userRegisterReducer,
    userDetailReducer,
    userUpdateProfileReducer,
    userListReducer,
    userUpdateReducer,
    userDeleteReducer,
} from 'reducers/userReducers'; 

import {
    storyListReducer,
    storyDetailsReducer,
    storyCreateReducer,
    storyUpdateReducer,
    storyDeleteReducer,
    storyListMyReducer,
    storyCommentCreateReducer,
} from 'reducers/storyReducers';

const reducer = combineReducers({
    storyList: storyListReducer,
    storyDetail: storyDetailsReducer,
    storyCreate: storyCreateReducer,
    storyUpdate: storyUpdateReducer,
    storyDelete: storyDeleteReducer,
    storyListMy: storyListMyReducer,
    storyCommentCreate: storyCommentCreateReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetail: userDetailReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
});

export default reducer;