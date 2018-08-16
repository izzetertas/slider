import React, { Component } from 'react'
import Slider from 'react-slick'
import './SliderPage.css'

class SliderPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      title: ''
    }
  }
  
  componentDidMount(){
    this.focusToInput()
  }

  focusToInput = () => {
    this.textInput && this.textInput.focus()
  }

  handleTitleOnChange = (e) =>  this.setState({ title : e.target.value })

  handleTitleOnKeyPress = (e) =>  e.key === 'Enter' && this.handleOnClick()

  handleOnClick = (e) => {
    const { items, title } = this.state
    if(!title) return

    this.setState({
      items: [...items, title],
      title: ''
    })
    this.focusToInput()
  }

  render(){
    const { items, title } = this.state;
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            dots: true
          }
        }
      ]
    };

    return (
      <div className='container'>
        <div className='input-container'>
          <input
            type='text'
            placeholder='Enter a title'
            autoFocus
            value={title}
            className='title'
            ref={input => this.textInput = input} 
            onChange={this.handleTitleOnChange}
            onKeyPress={this.handleTitleOnKeyPress}
          />
          <button
            onClick={this.handleOnClick}>
            Add New Slide
          </button>
        </div>
        <div>
          <Slider {...settings}>
            {items &&
              items.map((item, i) => (
                <div className='item' key={i}>
                  <h3>{item}</h3>
                </div>
              ))
            }
          </Slider>
        </div>
      </div>
    );
  }
}

export default SliderPage;