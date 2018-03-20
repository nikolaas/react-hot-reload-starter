import { mockStore } from '../../redux-test-helpers';
import {
    CHANGE_ARGUMENT,
    COMPUTING_STARTED,
    COMPUTING_SUCCESS,
    COMPUTING_ERROR,
    changeArgument,
    sum,
} from '../../../src/routes/AsyncComputer/AsyncComputer.actions';
import api from '../../../src/routes/AsyncComputer/api';

jest.mock('../../../src/routes/AsyncComputer/api');

describe('Async computer actions tests', () => {
    it('should create an action to change computer argument', () => {
        expect(changeArgument('a', 1)).toEqual({ type: CHANGE_ARGUMENT, payload: { name: 'a', value: 1 } });
    });

    const initialState = {
        asyncComputer: {
            a: 1,
            b: 2,
            computing: false,
            result: null,
            error: null,
        },
    };

    describe('Async computer with success computing response', () => {
        beforeEach(() => {
            api.sum.mockResolvedValue(3);
        });

        it('should create COMPUTING_STARTED and COMPUTING_SUCCESS actions when computing success', () => {
            const expectedActions = [
                { type: COMPUTING_STARTED },
                { type: COMPUTING_SUCCESS, payload: 3 },
            ];

            const store = mockStore(initialState);
            return store.dispatch(sum()).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });
    });

    describe('Async computer with error computing response', () => {
        beforeEach(() => {
            api.sum.mockRejectedValue('some error');
        });

        it('should create COMPUTING_STARTED and COMPUTING_ERROR actions when computing error', () => {
            const expectedActions = [
                { type: COMPUTING_STARTED },
                { type: COMPUTING_ERROR, payload: 'some error' },
            ];

            const store = mockStore(initialState);
            return store.dispatch(sum()).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });
    });
});
