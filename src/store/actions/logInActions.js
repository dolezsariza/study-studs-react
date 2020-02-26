export function login(userName) {
    return dispatch =>
        dispatch({
            userName: userName,
            type: "SIGN_IN"
        });
}

export function logout() {
    return dispatch =>
        dispatch({
            type: "SIGN_OUT"
        });
}
