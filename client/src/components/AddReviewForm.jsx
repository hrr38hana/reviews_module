import React from 'react';
import styled from 'styled-components';
import Rating from './RatingInput.jsx'

const TitleInput = styled.input`

`;
const Body = styled.input`
`;
const WouldRecommend = styled.input`
`;
const WouldNotRecommend = styled.input`
`;
const Location = styled.input`
`;
const Gift = styled.input`
`;
const NoGift = styled.input`
`;
const Email = styled.input`
`;
const Pros = styled.input`
`;
const Cons = styled.input`
`;
const DescribeYourself = styled.input`
`;
const BestUses = styled.input`
`;
const SubmitButton = styled.button`
`;
const ReviewLabel = styled.p`
font-size:14px;
font-family: Helvetica;
font-weight: 700;
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
        <h1>ReviewForm Mounted</h1>
        <Rating/>
        <ReviewLabel>Review Headline*</ReviewLabel>
        <TitleInput placeholder="title" name='title' onChange={this.handleChange} />
        <ReviewLabel>Pros</ReviewLabel>
        <Pros placeholder='Pros' name='pros' onChange={this.handleChange} />
        <ReviewLabel>Cons</ReviewLabel>

        <Cons placeholder='Cons' name='cons' onChange={this.handleChange} />
        <ReviewLabel>Describe Yourself</ReviewLabel>
        <DescribeYourself placeholder='Describe Yourself' name='describe_yourself' onChange={this.handleChange} />
        <ReviewLabel>Best Uses</ReviewLabel>
        <BestUses placeholder='Best Uses' name='best_uses' onChange={this.handleChange} />
        <ReviewLabel>Comments*</ReviewLabel>        
        <Body placeholder='body' name='body' onChange={this.handleChange} />
        <ReviewLabel>Bottom Line</ReviewLabel>        
        <WouldRecommend type='radio' value='1' name='recommend' onChange={this.handleChange} />
        <WouldNotRecommend type='radio' value='0' name='recommend' onChange={this.handleChange} />
        <ReviewLabel>Your Location*</ReviewLabel>
        <Location placeholder="Location" name='location' onChange={this.handleChange} />
        <ReviewLabel>Was This a Gift?</ReviewLabel>
        <Gift type='radio' value='1' name='gift' onChange={this.handleChange} />
        <NoGift type='radio' value='0' name='gift' onChange={this.handleChange} />
        <ReviewLabel>Email*</ReviewLabel>
        <Email placeholder='Email Address' name='email' onChange={this.handleChange} />
        <SubmitButton type='submit' onClick={() => this.props.post(this.state)}>Submit</SubmitButton>
      </div>
    )
  }
}

export default ReviewForm;