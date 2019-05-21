import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styled from 'styled-components';
import StarRating from './components/StarRating.jsx'
import BarGraph from './components/BarGraph.jsx'
import ReviewsCharts from './components/ReviewsCharts.jsx'



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
      <StarRating rating={this.state.rating}/>
      <ReviewsCharts reviews={this.state.reviews}/>
      </div>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));