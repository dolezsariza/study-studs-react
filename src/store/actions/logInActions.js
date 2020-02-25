export function login(id) {
    return dispatch =>
        dispatch({
            userId: id,
            type: "SIGN_IN"
        });
}

export function logout() {
    return dispatch =>
        dispatch({
            type: "SIGN_OUT"
        });
}
