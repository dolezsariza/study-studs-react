
const initialState = {
    loggedIn: false
};


const executeLogin = (state, action) => {
    return {
        ...state,
        loggedIn: true
    };
};

const loggedReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SIGN_IN":
            return executeLogin(state, action);
        case "SIGN_OUT":
            return false;
        default:
            return false;
    }
};

export default loggedReducer;
