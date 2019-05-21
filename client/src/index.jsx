import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styled from 'styled-components';
import StarRating from './StarRating.jsx'
import BarGraph from './BarGraph.jsx'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: Math.floor(Math.random() *100),
      reviews: [],
      rating: 0
    }
  }
  async componentDidMount() {
    await $.get(`/reviews/${this.state.product}`)
    .done(results => {
      this.setState({ reviews: results });
      console.log(this.state)
      this.getAverage()
    })
  }
  getAverage() {
    let total = 0, average;
    this.state.reviews.forEach(rev => {
      total += rev.stars;
    })
    average = total / this.state.reviews.length;
    this.setState({ rating: average })
  }

  render() {
    return (
      <div>

      <h1>rendering</h1>
      <StarRating rating={this.state.rating}/>
      <BarGraph reviews={this.state.reviews}/>
      </div>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));