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
`;
const ReviewWrapper = styled.div`
// visibility:hidden;
//   &:active{
//     visibility:visible;
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product: Math.floor(Math.random() * 100),
      reviews: [],
      rating: 0,
      isHidden: true
    }
    this.addReview = this.addReview.bind(this);
    this.toggleReviewWindow = this.toggleReviewWindow.bind(this);
  }
  componentDidMount() {
    console.log(this.state);
  }
  async componentWillMount() {
    await $.get(`/reviews/${this.state.product}`)
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
  addReview(data) {
    for(var i in data) {
      if (i !== 'pros' && i !== 'cons' && i!== 'describe_yourself' && i !== 'best_uses' && data[i] === null) {
        alert(`${i} Cannot Be Left Blank`);
        return;
      }
    }
    $.post(`/reviews/${data.product_Id}`, data)
      .done((response) => {
        alert(response);
      })
      .catch((err) => {
        alert('Review NOT Posted! : ', err);
      });
  }
  toggleReviewWindow() {
    this.setState({ isHidden: !this.state.isHidden })
  }

  render() {
    return (
      <div>
        <BigWrapper>
          <ReviewsCharts reviews={this.state.reviews} rating={this.state.rating} toggle={this.toggleReviewWindow} />
          {!this.state.isHidden ? <ReviewWrapper ref="ReviewForm">
            <ReviewForm product_Id={this.state.product} post={this.addReview} />
          </ReviewWrapper> : null}
        </BigWrapper>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));