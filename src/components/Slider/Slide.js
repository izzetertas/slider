import React from 'react'
import './Slider.css'

const Slide = ({ content, index }) => (
  <div className='slider-item' key={index}>
    {content}
  </div>
)

export default Slide
