import React, { Component } from 'react'
import './SliderEntryForm.css'

class SliderEntryForm extends Component {
  state = { title: '' }

  focusToInput = () => {
    this.textInput && this.textInput.focus()
  }

  handleTitleOnChange = (e) =>  this.setState({ title : e.target.value })

  handleTitleOnKeyPress = (e) =>  e.key === 'Enter' && this.handleOnClick()

  handleOnClick = (e) => {
    const { title } = this.state
    if(!title) return

    this.setState({ title: ''})
    this.focusToInput()
    this.props.onSubmit(title)
  }

  render(){
    const { title } = this.state;

    return (
      <div className='input-container'>
        <input
          type='text'
          placeholder='Enter a title'
          autoFocus
          value={title}
          ref={input => this.textInput = input} 
          onChange={this.handleTitleOnChange}
          onKeyPress={this.handleTitleOnKeyPress}
        />
        <button onClick={this.handleOnClick}>
          Add New Slide
        </button>
      </div>
    );
  }
}

export default SliderEntryForm
