import { increment } from '../../src/actions';

describe('counter actions tests', () => {
    it('should create an action to increment the counter to the default value', () => {
        expect(increment()).toEqual({ type: 'increment', payload: 1 });
    });

    it('should create an action to increment the counter to the specified value', () => {
        expect(increment(2)).toEqual({ type: 'increment', payload: 2 });
    });
});
