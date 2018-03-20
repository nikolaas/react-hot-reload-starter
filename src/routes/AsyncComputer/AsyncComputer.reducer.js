const initialState = {
    a: null,
    b: null,
    computing: false,
    result: null,
    error: null,
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case 'change_argument': {
            return { ...state, [action.payload.name]: action.payload.value };
        }
        case 'summing': {
            return { ...state, computing: true, result: null, error: null };
        }
        case 'summing_success': {
            return { ...state, computing: false, result: action.payload, error: null };
        }
        case 'summing_error': {
            return { ...state, computing: false, result: null, error: String(action.payload) };
        }
        default: {
            return state;
        }
    }
};
