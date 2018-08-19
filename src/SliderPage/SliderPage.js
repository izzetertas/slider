import React, { Component } from 'react'
import Slider from '../components/Slider'
import SliderEntryForm from '../components/SliderEntryForm'

class SliderPage extends Component {
  state = { items: [] }

  handleOnSubmit = (title) => {
    if(!title) return

    this.setState({
      items: [...this.state.items, title]
    })
  }

  render(){
    return (
      <div className='container'>
        <SliderEntryForm onSubmit={(title) => this.handleOnSubmit(title)} />
        <Slider items={this.state.items} />
      </div>
    );
  }
}

export default SliderPage;