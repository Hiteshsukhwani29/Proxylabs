export const setUser = (user) =>{
    return (dispatch) => {
        dispatch({
            type: 'set-user',
            payload: user
        })
    }
}

export const setLabsCompleted = (TotalLabsCompleted) =>{
    return (dispatch) => {
        dispatch({
            type: 'set-labs-completed',
            payload: TotalLabsCompleted
        })
    }
}