import React from 'react'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import SliderPage from './SliderPage'

let initialState;
let wrapper;

describe('<SliderPage/>', () => {
  beforeEach(() => {
    initialState = {
      items: []
    }
    wrapper = shallow(<SliderPage />)
  })

  it('should render correctly', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
      // expect(wrapper.find('button').length).toBe(1)
      // expect(wrapper.find('input').find({type: 'text'}).length).toBe(1)
      // expect(wrapper.find('input').find({type: 'text'}).text()).toEqual('')
  });

  it.skip('should render with items correctly', () => {
    wrapper.setState({ items: ['Test 1', 'Test 2', ' Test 3', 'Test 4']})
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  // it.skip('should set initial state correctly', () => {
  //   expect(wrapper.state()).toEqual(initialState)
  // });

  // describe('when user clicks Add New Slider button', () => {
  //   it.skip('should not change state if title is empty', () => {
  //     wrapper.setState({ title: '' })
  //     wrapper.find('button').first().simulate('click')
  //     expect(wrapper.state('items')).toEqual([])
  //   });

  //   it.skip('should add text value to items of the state', () => {
  //     wrapper.setState({ title: '1' })
  //     wrapper.find('button').first().simulate('click')
  //     const expected = ['1']
  //     expect(wrapper.state('items')).toEqual(expected)
  //   });
  // });


  // it.skip('should call textInput when input focuses', () => {
  //   wrapper = mount(<SliderPage />)
  //   const { textInput } = wrapper.instance();
  //   jest.spyOn(textInput, "focus");
  //   wrapper.instance().componentDidMount();
  //   expect(textInput.focus).toHaveBeenCalledTimes(1);
  // })

  // describe('when user type in text input', () => {
  //   it.skip('should update state correctly', () => {
  //     wrapper.find('input').find({type: 'text'}).first().simulate('change',  { target: { value: 'Test 1' } })
  //     expect(wrapper.state('title')).toEqual('Test 1')
  //   });
  // });

  // describe('when user click enter in text input', () => {
  //   it.skip('should call button click method', () => {
  //     wrapper.setState({ items: ['Test 1'], title: 'Test 2' })
  //     wrapper.find('input').find({type: 'text'}).first().simulate('keyPress',  { key: 'Enter' })
  //     expect(wrapper.state('items')).toEqual(['Test 1', 'Test 2'])
  //     expect(wrapper.state('title')).toEqual('')
  //   });
  // });  
});