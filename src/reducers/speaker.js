const speakerReducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "SPEAKER":
            return action.data;
        default: return state;
    }
};

export default speakerReducer;