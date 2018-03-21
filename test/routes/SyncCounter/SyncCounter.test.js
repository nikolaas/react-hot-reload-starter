import React from 'react';
import { shallow } from 'enzyme';
import { RawSyncCounter } from '../../../src/routes/SyncCounter/SyncCounter';

describe('Sync counter tests', () => {
    it('should render default value when value is not specified', () => {
        const component = shallow(<RawSyncCounter onIncrement={jest.fn()}/>);
        expect(component.find('.SyncCounter__value').text()).toMatchSnapshot();
    });

    it('should render specified value when value is specified', () => {
        const component = shallow(<RawSyncCounter onIncrement={jest.fn()} counter={10}/>);
        expect(component.find('.SyncCounter__value').text()).toMatchSnapshot();
    });

    it('should trigger onIncrementEvent when increment button was clicked', () => {
        const incrementSpy = jest.fn();
        const wrapper = shallow(<RawSyncCounter onIncrement={incrementSpy}/>);
        wrapper.find('button').simulate('click');
        expect(incrementSpy).toHaveBeenCalled();
    });
});
