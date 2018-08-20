import React from 'react'
import Slide from './Slide'
import './Slider.css'

const SlideList = ({ items }) => {
  if(!items) return null

  return (
    <div className='slider-content'>
    {
      items.map((item, i) => (
        <Slide content={item} key={i}/>
      ))
    }
    </div>
  )
}

export default SlideList
