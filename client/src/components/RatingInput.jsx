import React from 'react';
import Star from './Star.jsx'
import styled from 'styled-components'

const StarWrapper = styled.div`
display:flex;
margin:5px;
`

class Rating extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stars: [1, 1, 1, 0, 0],
    }
    this.addStars = this.addStars.bind(this)
  }
  componentDidMount() {
    
  }
  addStars(star) {
    event.preventDefault();
    let starSet = [];
    for (var i = star; i >= 0; i--) {
      starSet[i] = 1;
    }
    if (star !== 4) {
      for (var i = star; i < this.state.stars.length; i++) {
        starSet[i] = 0;
      }
    }
    this.setState({ stars: starSet })
    console.log(this.state)
  }
  render() {
    return (<div>
      <StarWrapper>
      {this.state.stars.map((el, index) => {
        return (<Star value={el} index={index} click={this.addStars}/>)
      })}
      </StarWrapper>
    </div>)
  }
}

export default Rating;