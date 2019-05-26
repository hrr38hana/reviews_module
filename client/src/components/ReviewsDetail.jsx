import React from 'react';
import styled from 'styled-components';
import IndividualReviewDetail from './IndividualReviewDetail.jsx'

const Header = styled.div`
display:flex;
justify-self: center;
width:100%;
height: 55px;
background-color: #f6f6f6;
line-height: 50px;
font-weight: 700;
font-size: 18px;
padding:5px;
font-family: Helvetica;
margin-bottom: 10px;
`;


const ReviewsDetails = props => {
    return props.reviews.length !== 0 ? (
      <div>
        <Header>Reviewd by {props.reviews.length} Customers </Header>
        {props.reviews.map(el => {
        return <IndividualReviewDetail review={el}/>})}
      </div>
    ) : (<div></div>)
  }

export default ReviewsDetails;