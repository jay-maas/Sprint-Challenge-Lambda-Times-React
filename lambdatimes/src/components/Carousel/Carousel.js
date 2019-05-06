import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carousel: [],
      count: 0
    }
  }
  componentDidMount(){
    this.setState({
      carousel: carouselData
    })
  }


  leftClick = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count === 0 ? prevState.carousel.length - 1 : prevState.count - 1
      }
    })
  }

  rightClick = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count === prevState.carousel.length - 1 ? 0 : prevState.count + 1
      }
    })
  }

  selectedImage = () => {
    return <img src={this.state.carousel[this.state.count]} style={{display: 'block'}} />
  }
  
  render(){
    const selectedImage = this.selectedImage
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        {selectedImage()}
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}