import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import SliderPage from './SliderPage'

let wrapper;

describe('<SliderPage/>', () => {
  beforeEach(() => {
    wrapper = shallow(<SliderPage />)
  })

  it('should render correctly', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
      expect(wrapper.find('Slider')).toHaveLength(1)
      expect(wrapper.find('SliderEntryForm')).toHaveLength(1)
  });

  it('should render with items correctly', () => {
    wrapper.setState({ items: ['Test 1', 'Test 2', ' Test 3', 'Test 4']})
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('When add new item,', () => {
    it('the new item should be added to SliderPage items prop', () => {
      wrapper.find('SliderEntryForm').prop('onSubmit')('test1');
      expect(wrapper.state('items')).toEqual(['test1']);
    });

    it('the new empty item should not be added to Slider itemlist', () => {
      wrapper.find('SliderEntryForm').prop('onSubmit')('');
      expect(wrapper.state('items')).toHaveLength(0);
    });
  });

  describe('When Add new item button is clicked without entering a title,', () => {
    it('items state should not be changed', () => {
      wrapper.find('SliderEntryForm').prop('onSubmit')('');
      expect(wrapper.state('items')).toHaveLength(0);
    });
  });

  describe('When SliderPage has items,', () => {
    it('slider should be passed the same items', () => {
      const expected = ['test1','test2']
      wrapper.setState({items : expected})
      expect(wrapper.find('Slider').prop('items')).toEqual(expected);
    })
  });
});