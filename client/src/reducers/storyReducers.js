import * as types from 'constants/storyConstants';

export const storyListReducer = (state = { stories: [] }, action) => {
    switch (action.type) {
        case types.STORY_LIST_REQUEST:
            return { loading: true, stories: [] };
        case types.STORY_LIST_SUCCESS:
            return { loading: false, stories: action.payload };
        case types.STORY_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    };
};

export const storyDetailsReducer = (
    state = { story: { comments: [] } },
    action
) => {
    switch (action.type) {
        case types.STORY_DETAILS_REQUEST:
            return { ...state, loading: true };
        case types.STORY_DETAILS_SUCCESS:
            return { loading: false, story: action.payload };
        case types.STORY_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    };
};

export const storyDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case types.STORY_DELETE_REQUEST:
            return { loading: true };
        case types.STORY_DELETE_SUCCESS:
            return { loading: false, success: true };
        case types.STORY_DELETE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    };
};

export const storyCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case types.STORY_CREATE_REQUEST:
            return { loading: true };
        case types.STORY_CREATE_SUCCESS:
            return { loading: false, success: true, story: action.payload };
        case types.STORY_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case types.STORY_CREATE_RESET:
            return {};
        default:
            return state;
    };
};

export const storyUpdateReducer = (state = { story: {} }, action) => {
    switch (action.type) {
        case types.STORY_UPDATE_REQUEST:
            return { loading: true };
        case types.STORY_UPDATE_SUCCESS:
            return { loading: false, success: true, story: action.payload };
        case types.STORY_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case types.STORY_UPDATE_RESET:
            return { story: {} };
        default:
            return state;
    };
};