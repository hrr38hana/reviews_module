import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styled from 'styled-components';
import ReviewsCharts from './components/ReviewsCharts.jsx'

const BigWrapper = styled.div`
border-style:solid;
display:flex;
justify-self:center;
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: Math.floor(Math.random() *100),
      reviews: [],
      rating: 0
    }
  }
  async componentWillMount() {
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
      <ReviewsCharts reviews={this.state.reviews} rating={this.state.rating}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));