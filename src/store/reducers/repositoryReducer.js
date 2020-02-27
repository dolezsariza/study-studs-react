import * as actionTypes from "../actions/actionTypes";

//global state
const initialState = {
    data: null,
    response: null
};

const executeGetDataSuccess = (state, action) => {
    return {
        ...state,
        data: action.data
    };
};

const executePostDataSuccess = (state, action) => {
    return {
        ...state,
        response: action.response
    };
};

const executePutDataSuccess = (state, action) => {
    return {
        ...state,
        response: action.response
    };
};

const executeDeleteDataSuccess = (state, action) => {
    return {
        ...state,
        response: action.response
    };
};

const executeRemoveData = (state, action) => {
    return {
        ...state,
        response: null,
        data: null
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_DATA_SUCCESS:
            return executeGetDataSuccess(state, action);
        case actionTypes.POST_DATA_SUCCESS:
            return executePostDataSuccess(state, action);
        case actionTypes.PUT_DATA_SUCCESS:
            return executePutDataSuccess(state, action);
        case actionTypes.DELETE_DATA_SUCCESS:
            return executeDeleteDataSuccess(state, action);
        case actionTypes.REMOVE_DATA:
            return executeRemoveData(state);
        default:
            return state;
    }
};

export default reducer;
