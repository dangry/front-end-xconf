const apiUrlReducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "API_URL":
            return action.data;
        default: return state;
    }
};

export default apiUrlReducer;