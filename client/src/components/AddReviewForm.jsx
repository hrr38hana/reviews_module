import React from 'react';
import styled from 'styled-components';
import Rating from './RatingInput.jsx'

const TitleInput = styled.input`
width:80%;
height: 30px;
`;
const Body = styled.input`
width: 80%;
height:150px;
`;
const WouldRecommend = styled.input`

`;
const WouldNotRecommend = styled.input`
`;
const Location = styled.input`
width:80%;
height: 30px;
`;
const Gift = styled.input`
`;
const NoGift = styled.input`
`;
const Email = styled.input`
width:80%;
height: 30px;
`;
const Pros = styled.input`
width:80%;
height: 30px;
`;
const Cons = styled.input`
width:80%;
height: 30px;
`;
const DescribeYourself = styled.input`
width:80%;
height: 30px;
`;
const BestUses = styled.input`
width:80%;
height: 30px;
`;
const SubmitButton = styled.button`
padding: 12px 15px;
    font-size: 14px;
    line-height: 1;
    border-radius: 2px;
    color: #fff;
    background-color: #0b7bc1;
    font-weight: 700;
    border: none;
    border-bottom: 2px solid #085c91;
    margin-top: 15px;
}


`;
const ReviewLabel = styled.p`
font-size:14px;
font-family: Helvetica;
font-weight: 700;
`;
const Nickname = styled.input`
width: 80%;
height:30px;
`;



class ReviewForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product_ID: this.props.product_Id,
      title: null,
      body: null,
      recommend: null,
      location: null,
      gift: null,
      email: null,
      pros: null,
      cons: null,
      describe_yourself: null,
      best_uses: null,
      stars: 3,
      nickname: null,
      
    }
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    console.log(this.props)
  }
  handleChange(event) {
    let target = event.target;
    let name = target.name;
    this.setState({ [name]: target.value })
  }
  render() {
    return (
      <div>
        <h1>Write a review</h1>
        <Rating/>
        <ReviewLabel>Review Headline*</ReviewLabel>
        <TitleInput placeholder="I would buy this product again and again" name='title' onChange={this.handleChange} />
        <ReviewLabel>Pros</ReviewLabel>
        <Pros placeholder='Pros' name='pros' onChange={this.handleChange} />
        <ReviewLabel>Cons</ReviewLabel>

        <Cons placeholder='Cons' name='cons' onChange={this.handleChange} />
        <ReviewLabel>Describe Yourself</ReviewLabel>
        <DescribeYourself placeholder='Describe Yourself' name='describe_yourself' onChange={this.handleChange} />
        <ReviewLabel>Best Uses</ReviewLabel>
        <BestUses placeholder='Best Uses' name='best_uses' onChange={this.handleChange} />
        <ReviewLabel>Comments*</ReviewLabel>        
        <Body placeholder='How you use the product. Things that are great about it. Things that arent great about it.' name='body' onChange={this.handleChange} />
        <ReviewLabel>Bottom Line</ReviewLabel>        
        <WouldRecommend type='radio' value='1' name='recommend' onChange={this.handleChange} />
        <WouldNotRecommend type='radio' value='0' name='recommend' onChange={this.handleChange} />
        <ReviewLabel>Nickname*</ReviewLabel>
        <Nickname placeholder='Ex: Sarah' name='nickname' onChange={this.handleChange}/>
        <ReviewLabel>Your Location*</ReviewLabel>
        <Location placeholder="Ex: San Jose, CA" name='location' onChange={this.handleChange} />
        <ReviewLabel>Was This a Gift?</ReviewLabel>
        <Gift type='radio' value='1' name='gift' onChange={this.handleChange} />
        <NoGift type='radio' value='0' name='gift' onChange={this.handleChange} />
        <ReviewLabel>Email*</ReviewLabel>
        <Email placeholder='Enter your email in case we need to get in tough, and to verify your review' name='email' onChange={this.handleChange} /><br/>
        <SubmitButton type='submit' onClick={() => this.props.post(this.state)}>Submit Review</SubmitButton>
      </div>
    )
  }
}

export default ReviewForm;