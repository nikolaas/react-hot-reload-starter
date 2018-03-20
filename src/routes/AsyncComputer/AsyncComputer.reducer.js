import { CHANGE_ARGUMENT, COMPUTING_STARTED, COMPUTING_SUCCESS, COMPUTING_ERROR } from './AsyncComputer.actions'

const initialState = {
    a: null,
    b: null,
    computing: false,
    result: null,
    error: null,
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_ARGUMENT: {
            return { ...state, [action.payload.name]: action.payload.value };
        }
        case COMPUTING_STARTED: {
            return { ...state, computing: true, result: null, error: null };
        }
        case COMPUTING_SUCCESS: {
            return { ...state, computing: false, result: action.payload, error: null };
        }
        case COMPUTING_ERROR: {
            return { ...state, computing: false, result: null, error: String(action.payload) };
        }
        default: {
            return state;
        }
    }
};
