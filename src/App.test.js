import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Card from './components/Card';
import Filter from './components/Filter';

describe('Header', () => {
    it('should render correctly with no props', () => {
        const component = shallow(<Header />);
        expect(component).toMatchSnapshot();
    });

    it('should have the text SpaceX Launch Programs', () => {
        const component = shallow(<Header />);
        expect(component.find("h1").contains("SpaceX Launch Programs")).toEqual(true);
    });
});

describe('Footer', () => {
    it('should render correctly with no props', () => {
        const component = shallow(<Footer />);
        expect(component).toMatchSnapshot();
    });
});

describe('Loader', () => {
    it('should render correctly with no props', () => {
        const component = shallow(<Loader />);
        expect(component).toMatchSnapshot();
    });
});

describe('Card', () => {
    it('should render correctly with given props', () => {
        const item = {
            mission_id: 1,
            mission_name: 'Test Mission',
            launch_landing: true,
            launch_success: true,
            launch_year: 2008,
            mission_patch: 'http://abc.com'
        };
        const component = shallow(<Card item={item} />);
        expect(component).toMatchSnapshot();
    });
});

describe('Filter', () => {
    
    it('should render correctly with given props', () => {
        const component = shallow(<Filter text="2007" value="2007" isSelected={true} clickHandler={clickFn} />);
        expect(component).toMatchSnapshot();
    });

    it('should be possible to activate button with Spacebar', () => {
        const blankFn = () => {};
        const component = mount(<Filter text="2007" value="2007" isSelected={true} clickHandler={blankFn} />);
        component
            .find('button')
            .simulate('keydown', { keyCode: 32 });
        expect(component).toMatchSnapshot();
        component.unmount();
    });

    const clickFn = jest.fn();
    it('props function should be callable', () => {
        const component = shallow(<Filter text="2007" value="2007" isSelected={true} clickHandler={clickFn} />);
        component
            .find('button')
            .simulate('click');
        expect(clickFn).toHaveBeenCalled();
    });
});

