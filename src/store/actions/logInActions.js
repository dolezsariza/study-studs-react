export  function login() {
    return dispatch => dispatch({
      type: "SIGN_IN"
    })
  }

  export function logout() {
    return dispatch => dispatch({
      type: "SIGN_OUT"
    })
  }