import React from 'react'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import Slider from '../Slider'

let wrapper;

describe('<Slider/>', () => {
  beforeEach(() => {
    // initialState = {
    //   items: []
    // }
    wrapper = shallow(<Slider  />)
  })
  it('should render correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find('button').length).toBe(2)
    expect(wrapper.find('SlideList').length).toBe(1)  
  });

  describe('When slide items are less than 3', () => {
    it('arrow buttons should be disabled', () => {
      wrapper = shallow(<Slider items={['1', '2']} />)
      expect(wrapper.find('button').find({disabled: true}).length).toBe(2)
    });
  });

  describe('When slide items count is equal 4 and firstActiveSlide index is equal 1', () => {
    beforeEach(() => {
      wrapper = shallow(<Slider items={['1', '2', '3', '4']} />)
      wrapper.setState({ firstActiveSlide: 1})
    })
    it('left button should be enabled', () => {
      expect(wrapper.find('button').first().prop('disabled')).toBeFalsy()
    });
    it('right button should be disabled', () => {
      expect(wrapper.find('button').at(1).prop('disabled')).toBeTruthy()
    });
  });

  describe('When slide items count is equal 5 and firstActiveSlide index is equal 0', () => {
    beforeEach(() => {
      wrapper = shallow(<Slider items={['1', '2', '3', '4', '5']} />)
      wrapper.setState({ firstActiveSlide: 0})
    })
    it('left button should be disabled', () => {
      expect(wrapper.find('button').first().prop('disabled')).toBeTruthy()
    });
    it('right button should be disabled', () => {
      expect(wrapper.find('button').at(1).prop('disabled')).toBeFalsy()
    });
  });

  describe('When new slides comes from props', () => {
    it('should update state', () => {
      wrapper = shallow(<Slider items={['1']}/>)
      const newItems = ['1', '2', '3']
      wrapper.setProps({ items : newItems})
      expect(wrapper.state('items')).toEqual(newItems)
    });
  });

  describe('When arrow botton is clicked', () => {
    it('should update firstActiveSlide index', () => {
      wrapper = shallow(<Slider items={['1', '2', '3', '4', '5']} />)
      wrapper.setState({ firstActiveSlide: 0})
      wrapper.find('button').at(1).simulate('click')
      expect(wrapper.state('firstActiveSlide')).toEqual(1)

      wrapper.find('button').at(0).simulate('click')
      expect(wrapper.state('firstActiveSlide')).toEqual(0)
    });
  });
})