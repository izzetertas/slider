import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SlideList from './SlideList'
import './Slider.css'

class Slider extends Component {
  state = {
    items : this.props.items || [],
    firstActiveSlide: 0
  }

  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.string)
  }

  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.items && nextProps.items.length !== prevState.items.length) {
      return {
        items: nextProps.items
      }
    }
    return {}
  }

  get isNextButtonActive() {
    const { firstActiveSlide, items } = this.state
    return items.length < 4 || firstActiveSlide + 2 === items.length-1
  }

  get isPreviousButtonActive() {
    return this.state.firstActiveSlide === 0
  }

  getActiveSlides() {
    const { items } = this.state
    if(!items) return null

    const { firstActiveSlide } = this.state
    return items.filter((item, i) => i >= firstActiveSlide && i <= firstActiveSlide + 2)
  }

  renderArrow(isDisabled, count, text){
    return (
      <div className='arrow'>
        <button
          disabled={isDisabled}
          onClick={() => this.setState({ firstActiveSlide: this.state.firstActiveSlide + count})}
        >
          {text}
        </button>
      </div>
    )
  }

  render() {
    const items = this.getActiveSlides()

    return(
      <div className='slider-container'>
        {this.renderArrow(this.isPreviousButtonActive, -1, '<')}
        <SlideList items={items}/>
        {this.renderArrow(this.isNextButtonActive, 1, '>')}
      </div>
    )
  }
}

export default Slider