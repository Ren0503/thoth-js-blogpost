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
    state = { story: { comments: [], user: {} } },
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

export const storyListMyReducer = (state = { stories: [] }, action) => {
    switch (action.type) {
        case types.STORY_LIST_MY_REQUEST:
            return {
                loading: true,
            }
        case types.STORY_LIST_MY_SUCCESS:
            return {
                loading: false,
                stories: action.payload,
            }
        case types.STORY_LIST_MY_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        case types.STORY_LIST_MY_RESET:
            return { stories: [] }
        default:
            return state;
    }
};

export const storyCommentCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case types.STORY_CREATE_COMMENT_REQUEST:
            return { loading: true };
        case types.STORY_CREATE_COMMENT_SUCCESS:
            return { loading: false, success: true };
        case types.STORY_CREATE_COMMENT_FAIL:
            return { loading: false, error: action.payload };
        case types.STORY_CREATE_COMMENT_RESET:
            return {};
        default:
            return state;
    }
};

export const storyByUserReducer = (state = { stories: []}, action) => {
    switch (action.type) {
        case types.STORY_BY_USER_REQUEST:
            return { loading: true, stories: [] };
        case types.STORY_BY_USER_SUCCESS:
            return {
                loading: false,
                stories: action.payload,
            };
        case types.STORY_BY_USER_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const storyTopReducer = (state= { stories: []}, action) => {
    switch (action.type) {
        case types.STORY_TOP_REQUEST:
            return { loading: true, stories: [] };
        case types.STORY_TOP_SUCCESS:
            return { loading: false, stories: action.payload };
        case types.STORY_TOP_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};