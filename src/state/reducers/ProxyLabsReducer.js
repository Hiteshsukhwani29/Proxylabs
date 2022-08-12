const ProxyLabsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'set-user':
            return { ...state, user: action.payload };
        default: return state;
    }
}

export default ProxyLabsReducer;