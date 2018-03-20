import React from 'react';
import {
    changeArgument,
    startComputing,
    successComputing,
    errorComputing
} from '../../../src/routes/AsyncComputer/AsyncComputer.actions';
import reducer from '../../../src/routes/AsyncComputer/AsyncComputer.reducer';

const initialState = {
    a: null,
    b: null,
    computing: false,
    result: null,
    error: null,
};

const createState = state => {
    return { ...initialState, ...state };
};

describe('Async computer reducer tests', () => {
    it('should change computer argument on changeArgument action', () => {
        expect(reducer(initialState, changeArgument('a', 1))).toEqual({
            a: 1,
            b: null,
            computing: false,
            result: null,
            error: null,
        });
    });

    it('should change computer state and clear result and error on startComputing action', () => {
        expect(reducer(createState({ result: 1, error: 'error' }), startComputing())).toEqual({
            a: null,
            b: null,
            computing: true,
            result: null,
            error: null,
        });
    });

    it('should change computer state, set result and clear error on successComputing action', () => {
        expect(reducer(createState({ computing: true, error: 'error' }), successComputing(3))).toEqual({
            a: null,
            b: null,
            computing: false,
            result: 3,
            error: null,
        });
    });

    it('should change computer state, set error and clear result on errorComputing action', () => {
        expect(reducer(createState({ computing: true, result: 1 }), errorComputing('error'))).toEqual({
            a: null,
            b: null,
            computing: false,
            result: null,
            error: 'error',
        });
    });
});
