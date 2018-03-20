import React from 'react';
import { shallow } from 'enzyme';
import { RawAsyncComputer } from '../../../src/routes/AsyncComputer/AsyncComputer';

describe('Sync counter tests', () => {
    it('should render arguments values in inputs when arguments is specified', () => {
        const component = shallow(<RawAsyncComputer onArgumentChange={jest.fn()} onSum={jest.fn()} a={1} b={2}/>);
        expect(component.find('#a').prop('value')).toMatchSnapshot();
        expect(component.find('#b').prop('value')).toMatchSnapshot();
    });

    it('should render "computing..." message when computing in progress', () => {
        const component2 = shallow(<RawAsyncComputer onArgumentChange={jest.fn()} onSum={jest.fn()} computing/>);
        expect(component2.find('.AsyncComputer__result').text()).toMatchSnapshot();
    });

    it('should render result of computing when computing finished successfully', () => {
        const component = shallow(<RawAsyncComputer onArgumentChange={jest.fn()} onSum={jest.fn()} result={3}/>);
        expect(component.find('.AsyncComputer__result').text()).toMatchSnapshot();
    });

    it('should render error of computing when computing finished with error', () => {
        const component = shallow(<RawAsyncComputer onArgumentChange={jest.fn()} onSum={jest.fn()} error="error"/>);
        expect(component.find('.AsyncComputer__result').text()).toMatchSnapshot();
    });

    it('should trigger onArgumentChange when some argument\'s values was changed', () => {
        const argumentChangeSpy = jest.fn();
        const component = shallow(<RawAsyncComputer onArgumentChange={argumentChangeSpy} onSum={jest.fn()}/>);

        component.find('#a').simulate('change', { target: { name: 'a', value: '1' } });
        expect(argumentChangeSpy).toHaveBeenLastCalledWith('a', 1);

        component.find('#b').simulate('change', { target: { name: 'b', value: '2' } });
        expect(argumentChangeSpy).toHaveBeenLastCalledWith('b', 2);
    });

    it('should trigger onSum when sum button was clicked', () => {
        const sumSpy = jest.fn();
        const component = shallow(<RawAsyncComputer onArgumentChange={jest.fn()} onSum={sumSpy}/>);

        component.find('Button').simulate('click');

        expect(sumSpy).toHaveBeenCalled();
    });
});
