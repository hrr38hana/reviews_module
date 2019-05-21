import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: 1,
      reviews: [],
      rating: 0
    }
  }
  componentDidMount() {
    $.get('/reviews/10')
      .done(results => {
        this.setState({ reviews: results });
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
        <StarRatings
          rating={this.state.rating}
          starRatedColor="green"
          changeRating={this.changeRating}
          numberOfStars={5}
          name='rating'
        />

        <h1>rendering</h1>
      </div>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));