import axios from 'axios';
import { logout } from './userActions';
import * as types from 'constants/storyConstants';

export const listStories = () => async (dispatch) => {
    try {
        dispatch({ type: types.STORY_LIST_REQUEST });

        const { data } = await axios.get(
            `/api/stories`
        );

        dispatch({
            type: types.STORY_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: types.STORY_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    };
};

export const detailStory = (id) => async (dispatch) => {
    try {
        dispatch({ type: types.STORY_DETAILS_REQUEST });

        const { data } = await axios.get(`/api/stories/${id}`);

        dispatch({
            type: types.STORY_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: types.STORY_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    };
};

export const createStory = () => async (dispatch, getState) => {
    try {
        dispatch({ type: types.STORY_CREATE_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            }
        };

        const { data } = await axios.post(`/api/stories`, {}, config);

        dispatch({
            type: types.STORY_CREATE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout());
        }
        dispatch({
            type: types.STORY_CREATE_FAIL,
            payload: message,
        });
    };
};

export const updateStory = (story) => async (dispatch, getState) => {
    try {
        dispatch({ type: types.STORY_UPDATE_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.put(
            `/api/stories/${story._id}`,
            story,
            config
        );

        dispatch({
            type: types.STORY_UPDATE_SUCCESS,
            payload: data,
        });

        dispatch({
            type: types.STORY_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === 'Not authorized, token failed') {
            dispatch(logout());
        };
        dispatch({
            type: types.STORY_UPDATE_FAIL,
            payload: message,
        });
    };
};

export const deleteStory = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: types.STORY_DELETE_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        await axios.delete(`/api/stories/${id}`, config);

        dispatch({
            type: types.STORY_DELETE_SUCCESS,
        });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout());
        };
        dispatch({
            type: types.STORY_DELETE_FAIL,
            payload: message,
        });
    };
};

export const myStories = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: types.STORY_LIST_MY_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.get(`/api/stories/my_stories`, config);

        dispatch({
            type: types.STORY_LIST_MY_SUCCESS,
            payload: data,
        });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: types.STORY_LIST_MY_FAIL,
            payload: message,
        });
    }
};

export const createStoryComment = (storyId, comment) => async (dispatch, getState) => {
    try {
        dispatch({ type: types.STORY_CREATE_COMMENT_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        await axios.post(`/api/stories/${storyId}/comments`, comment, config);

        dispatch({
            type: types.STORY_CREATE_COMMENT_SUCCESS
        });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout());
        }
        dispatch({
            type: types.STORY_CREATE_COMMENT_FAIL,
            payload: message,
        });
    }
};

export const storyByUser = (userId) => async (dispatch) => {
    try {
        dispatch({ type: types.STORY_BY_USER_REQUEST });

        const { data } = await axios.get(`/api/stories/user/${userId}`);

        dispatch({
            type: types.STORY_BY_USER_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: types.STORY_BY_USER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}