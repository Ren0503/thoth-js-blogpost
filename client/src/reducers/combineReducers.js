import {combineReducers} from 'redux';

import {
    userLoginReducer,
    userRegisterReducer,
    userDetailReducer,
    userProfileReducer,
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
    storyByUserReducer,
    storyTopReducer,
    storyCommentCreateReducer,
} from 'reducers/storyReducers';

const reducer = combineReducers({
    storyList: storyListReducer,
    storyDetail: storyDetailsReducer,
    storyCreate: storyCreateReducer,
    storyUpdate: storyUpdateReducer,
    storyDelete: storyDeleteReducer,
    storyListMy: storyListMyReducer,
    storyByUser: storyByUserReducer,
    storyCommentCreate: storyCommentCreateReducer,
    storyTop: storyTopReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetail: userDetailReducer,
    userProfile: userProfileReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
});

export default reducer;