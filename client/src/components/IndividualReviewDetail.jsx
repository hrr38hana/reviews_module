import React from 'react';
import styled from 'styled-components';
import StarRating from 'react-star-ratings';

const ReviewWrapper = styled.div`
display:flex;
margin-bottom: 30px;

`;
const Rating = styled.div`
margin:0 7.5px;
height: 20px;
width: 20px;
border-width: 1px;
border-color: #666666;
text-align: center;
line-height: 20px;
color: #666666;
align-self: flex-end;
font-family: Helvetica, Arial, sans-serif;
font-weight:400;
border-style:solid;
font-size: 14px
`;

const ReviewHeader = styled.div`
width:100%;
height:20px;

display:flex;
font-size: 20px;
font-weight:700;
font-family: Helvetica, Arial, sans-serif;
margin-bottom:10px;
`;
const ReviewerDetails = styled.div`
width:20%
height:100px;
margin-top: 20px;

font-family: Helvetica, Arial, san-serif;
color: #666666;
font-size:14px;
`;

const ReviewBody = styled.div`
width:80%;
height:auto;
font-family: Helvetica, Arial, san-serif;
`;

const ReviewComments = styled.p`
font-family: Helvetica, Arial, san-serif;
color: #666666;
font-size:14px;
`;

const IndividualReviewDetail = ({ review }) => {
  let recommend = review.recommended === 1 ? 'Yes, I would recommend to a friend' : 'No, I would not recommend to a friend';
  return (
    <div>
      <ReviewWrapper>
        <ReviewBody>
          <ReviewHeader>
            <StarRating
              rating={review.stars}
              starRatedColor="#46B931"
              starDimension='20px'
              numberOfStars={5}
              starSpacing='0px'
              name='rating' />
            <Rating>{review.stars}</Rating>
            {review.title}
          </ReviewHeader>
          <ReviewComments>{review.body}</ReviewComments>
          <p>
            <a style={{ fontWeight: 700 }}>Bottom Line  </a>
            <a style={{ fontWeight: 400, fontSize: 14, fontColor: 666666 }}>{recommend}</a>
          </p>
        </ReviewBody>
        <ReviewerDetails>
          <p><a style={{ marginLeft: 3, fontWeight: 700 }}>Submitted </a> {review.created} Days Ago</p>
          <p><a style={{ marginLeft: 3, fontWeight: 700 }}>By </a> {review.nickname}</p>
          <p><a style={{ marginLeft: 3, fontWeight: 700 }}>From </a> {review.location}</p>
        </ReviewerDetails>
      </ReviewWrapper>
    </div>
  )
}

export default IndividualReviewDetail;