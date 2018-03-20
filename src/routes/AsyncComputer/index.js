import { registerAsyncReducer } from '../../store';
import AsyncComputer from './AsyncComputer';
import reducer from './AsyncComputer.reducer';

registerAsyncReducer('asyncComputer', reducer);

export default AsyncComputer;
