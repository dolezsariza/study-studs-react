export function login(claims) {
    return dispatch =>
        dispatch({
            claims: claims,
            type: "SIGN_IN"
        });
}

export function logout() {
    return dispatch =>
        dispatch({
            type: "SIGN_OUT"
        });
}
