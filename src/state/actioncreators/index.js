export const setUser = (user) =>{
    return (dispatch) => {
        dispatch({
            type: 'set-user',
            payload: user
        })
    }
}