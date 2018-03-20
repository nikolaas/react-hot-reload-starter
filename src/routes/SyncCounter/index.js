import { registerAsyncReducer } from '../../store';
import SyncCounter from './SyncCounter';
import reducer from './SyncCounter.reducer';

registerAsyncReducer('syncCounter', reducer);

export default SyncCounter;
