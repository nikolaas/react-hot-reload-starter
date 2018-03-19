import { increment } from '../../src/actions';
import { counterReducer } from '../../src/reducers/counter-reducer';

describe('counter reducer tests', () => {
    it('should increment the counter to the specified value', () => {
        expect(counterReducer(0, increment())).toEqual(1);
    });
});
