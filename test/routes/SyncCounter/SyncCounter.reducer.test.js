import { increment } from '../../../src/routes/SyncCounter/SyncCounter.actions';
import reducer from '../../../src/routes/SyncCounter/SyncCounter.reducer';

describe('sync counter reducer tests', () => {
    it('should increment the counter to the specified value', () => {
        expect(reducer(0, increment())).toEqual(1);
    });
});
