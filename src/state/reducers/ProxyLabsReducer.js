const ProxyLabsReducer = (state = {}, action) => {
  switch (action.type) {
    case "set-user":
      return { ...state, user: action.payload };
    case "set-labs-completed":
      return { ...state, TotalLabsCompleted: action.payload };
    default:
      return state;
  }
};

export default ProxyLabsReducer;
