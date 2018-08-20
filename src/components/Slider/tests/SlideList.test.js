import React from 'react'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import SlideList from '../SlideList'


describe('<SlideList/>', () => {
  it('should render correctly with items', () => {
    const wrapper = mount(<SlideList items={['1', '2', '3']} />)
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find('div').length).toBe(4)
  })

  it('should render correctly without any items', () => {
    const wrapper = shallow(<SlideList />)
    expect(wrapper.find('div').length).toBe(0)
  })

})