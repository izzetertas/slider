import React from 'react'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import SliderEntryForm from './SliderEntryForm'

let wrapper;

describe('<SliderEntryForm/>', () => {
  beforeEach(() => {
    wrapper = shallow(<SliderEntryForm />)
  })

  it('should render correctly', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
      expect(wrapper.find('button').length).toBe(1)
      expect(wrapper.find('input').find({type: 'text'}).length).toBe(1)
  });


  describe('when user clicks Add New Slider button', () => {
    describe('if title is empty', () => {
      it('should not call onSubmit ', () => {
        const onSubmitMock = jest.fn()
        wrapper = shallow(<SliderEntryForm onSubmit={onSubmitMock} />)
        wrapper.find('button').first().simulate('click')
        expect(wrapper.state('title')).toBe('')
        expect(onSubmitMock).toHaveBeenCalledTimes(0)
      });
    });
    
    describe('if title is not empty', () => {
      it('should call onSubmit ', () => {
        const onSubmitMock = jest.fn()
        wrapper = shallow(<SliderEntryForm onSubmit={onSubmitMock} />)
        wrapper.setState({ title: 'Test 1'})
        wrapper.find('button').first().simulate('click' )
        expect(wrapper.state('title')).toBe('')
        expect(onSubmitMock).toHaveBeenCalledWith('Test 1')
      });
    });
  });


  it.skip('should call textInput when input focuses', () => {
    wrapper = mount(<SliderEntryForm />)
    const { textInput } = wrapper.instance();
    jest.spyOn(textInput, "focus");
    wrapper.instance().componentDidMount();
    expect(textInput.focus).toHaveBeenCalledTimes(1);
  })

  describe('when user type in text input', () => {
    it('should update state correctly', () => {
      wrapper.find('input').find({type: 'text'}).first().simulate('change',  { target: { value: 'Test 1' } })
      expect(wrapper.state('title')).toEqual('Test 1')
    });
  });

  describe('when user click enter in text input', () => {
    it('should call button click method', () => {
      const onSubmitMock = jest.fn()
      wrapper = shallow(<SliderEntryForm onSubmit={onSubmitMock} />)
      wrapper.setState({ title: 'Test 1'})
      wrapper.find('input').find({type: 'text'}).first().simulate('keyPress',  { key: 'Enter' })
      expect(wrapper.state('title')).toBe('')
      expect(onSubmitMock).toHaveBeenCalledWith('Test 1')
    });
  });  
});