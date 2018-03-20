import React from 'react';
import { shallow } from 'enzyme';
import { RawSyncCounter } from '../../../src/routes/SyncCounter/SyncCounter';

describe('Sync counter tests', () => {
    it('should render the sync counter', () => {
        const wrapper = shallow(<RawSyncCounter onIncrement={() => {}}/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should trigger onIncrementEvent by click on increment button', () => {
        const incrementSpy = jest.fn();
        const wrapper = shallow(<RawSyncCounter onIncrement={incrementSpy}/>);
        wrapper.find('button').simulate('click');
        expect(incrementSpy).toHaveBeenCalled();
    });
});
