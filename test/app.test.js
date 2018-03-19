import React from 'react';
import { shallow } from 'enzyme';
import { RawApp } from '../src/App';

describe('App tests', () => {
    it('should render the app', () => {
        const wrapper = shallow(<RawApp onIncrement={() => {}}/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should trigger onIncrementEvent by click on increment button', () => {
        const incrementSpy = jest.fn();
        const wrapper = shallow(<RawApp onIncrement={incrementSpy}/>);
        wrapper.find('button').simulate('click');
        expect(incrementSpy).toHaveBeenCalled();
    });
});
