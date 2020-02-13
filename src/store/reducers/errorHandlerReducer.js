import * as actionTypes from '../actions/actionTypes';
 
const initialState = {
    errorMessage: ''
}
 
const execute404 = (state, action) => {
    action.props.history.push('/404');
    return { ...state };
}
 
const execute500 = (state, action) => {
    action.props.history.push('/500');
    return { ...state };
}
 
const executeOtherError = (state, action) => {
    return {
        ...state,
        errorMessage: action.error.response.data
    };
}

const executeCloseErrorInfo = (state, action) => {
    return {
        ...state,
        errorMessage: ""
    };
};
 
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.HTTP_404_ERROR:
            return execute404(state, action);
        case actionTypes.HTTP_500_ERROR:
            return execute500(state, action);
        case actionTypes.HTTP_OTHER_ERROR:
            return executeOtherError(state, action);
        case actionTypes.CLOSE_ERROR_INFO:
            return executeCloseErrorInfo(state, action);
        default:
            return state;
    }
}
 
export default reducer;