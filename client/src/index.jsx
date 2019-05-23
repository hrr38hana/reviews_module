import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styled from 'styled-components';
import ReviewsCharts from './components/ReviewsCharts.jsx'
import ReviewForm from './components/AddReviewForm.jsx';


const BigWrapper = styled.div`
position:relative;
max-width:1050px;
min-width: 970px;
left:50%;
transform: translate(-50%)
`

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product: Math.floor(Math.random() * 100),
      reviews: [],
      rating: 0
    }
    this.addReview = this.addReview.bind(this);
  }
  componentDidMount() {
    console.log(this.state);
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
  addReview(data) {
    $.post(`/reviews/${data.product_Id}`, data)
      .done((response) => {
        alert(response);
      })
      .catch((err) => {
        alert('Review NOT Posted! : ', err);
      });
  }

  render() {
    return (
      <div>
        <BigWrapper>

          <ReviewsCharts reviews={this.state.reviews} rating={this.state.rating} />
          <ReviewForm product_Id={this.state.product} post={this.addReview} />
        </BigWrapper>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));