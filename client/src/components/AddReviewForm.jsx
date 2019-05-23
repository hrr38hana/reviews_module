import React from 'react';
import styled from 'styled-components';

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
        <TitleInput placeholder="title" name='title' onChange={this.handleChange} />
        <Body placeholder='body' name='body' onChange={this.handleChange} />
        <WouldRecommend type='radio' value='1' name='recommend' onChange={this.handleChange} />
        <WouldNotRecommend type='radio' value='0' name='recommend' onChange={this.handleChange} />
        <Location placeholder="Location" name='location' onChange={this.handleChange} />
        <Gift type='radio' value='1' name='gift' onChange={this.handleChange} />
        <NoGift type='radio' value='0' name='gift' onChange={this.handleChange} />
        <Email placeholder='Email Address' name='email' onChange={this.handleChange} />
        <Pros placeholder='Pros' name='pros' onChange={this.handleChange} />
        <Cons placeholder='Cons' name='cons' onChange={this.handleChange} />
        <DescribeYourself placeholder='Describe Yourself' name='describe_yourself' onChange={this.handleChange} />
        <BestUses placeholder='Best Uses' name='best_uses' onChange={this.handleChange} />
        <SubmitButton type='submit' onClick={() => this.props.post(this.state)}>Submit</SubmitButton>
      </div>
    )
  }
}

export default ReviewForm;