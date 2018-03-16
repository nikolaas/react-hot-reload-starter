import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../src/App';

it('should render the app', () => {
    const wrapper = shallow(
        <App/>
    );
    expect(wrapper).toMatchSnapshot();
});
