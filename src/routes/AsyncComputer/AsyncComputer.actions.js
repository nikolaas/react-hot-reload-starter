import { api } from './api';

export const changeArgument = (name, value) => {
    return { type: 'change_argument', payload: { name, value } };
};

export const sum = () => async (dispatch, getState) => {
    const state = getState().asyncComputer;
    const { a, b } = state;
    dispatch({ type: 'summing' });
    try {
        const result = await api.sum(a, b);
        dispatch({ type: 'summing_success', payload: result });
    } catch (error) {
        dispatch({ type: 'summing_error', payload: error });
    }
};
