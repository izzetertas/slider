import React from 'react'
import './Slider.css'

const SlideList = ({ items }) => {
  if(!items) return null

  return (
    <div className='slider-content'>
    {
      items.map((item, i) => (
        <div className='slider-item' key={i}>
          {item}
        </div>
      ))
    }
    </div>
  )
}

export default SlideList
