const initialState = {
    userName: "",
    userId: "",
    loggedIn: false
};

const executeLogin = (state, action) => {
    return {
        ...state,
        userName: action.claims[1],
        userId: action.claims[0],
        loggedIn: true
    };
};

const executeLogout = (state, action) => {
    return {
        ...state,
        loggedIn: false
    };
};

const loggedReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case "SIGN_IN":
            return executeLogin(state, action);
        case "SIGN_OUT":
            return executeLogout(state, action);
        default:
            return state;
    }
};

export default loggedReducer;
