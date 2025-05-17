import React, { Component } from 'react'
import './index.css';

export class Color extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         color : '#4169E1'
      }
    }


    changeColor = (event)=>{
        this.setState({
            color : event.target.value
    })
    }
   

    
  render() {
    return (
        <>
      <div className='Parent-Container'>
        <h1>COLOR PICKER </h1>
        <div className='color-Display' style={{backgroundColor: this.state.color , color : this.state.color}}>
            <p>Selected Color : {this.state.color}</p>
        </div>

        <div className='Selection'>
        <p>Select a Color :</p>
        <div className='color' style={{backgroundColor : this.state.color}}><input type="color" value={this.state.color} onChange={this.changeColor}  /></div>
        </div>
      </div>
      </>
    )
  }
}

export default Color
