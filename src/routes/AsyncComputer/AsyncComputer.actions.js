import api from './api';

export const CHANGE_ARGUMENT = 'change_argument';
export const COMPUTING_STARTED = 'computing_started';
export const COMPUTING_SUCCESS = 'computing_success';
export const COMPUTING_ERROR = 'computing_error';

export const changeArgument = (name, value) => {
    return { type: CHANGE_ARGUMENT, payload: { name, value } };
};

export const startComputing = () => {
    return { type: COMPUTING_STARTED };
};

export const successComputing = result => {
    return { type: COMPUTING_SUCCESS, payload: result };
};

export const errorComputing = error => {
    return { type: COMPUTING_ERROR, payload: error };
};

export const sum = () => async (dispatch, getState) => {
    const state = getState().asyncComputer;
    const { a, b } = state;
    dispatch(startComputing());
    try {
        const result = await api.sum(a, b);
        dispatch(successComputing(result));
    } catch (error) {
        dispatch(errorComputing(String(error)));
    }
};
