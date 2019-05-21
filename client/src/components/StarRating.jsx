import React from 'react';
import StarRatings from 'react-star-ratings';
import styled from 'styled-components';

const Wrapper = styled.div`
width:100%;
display:flex;
`
const Average = styled.div`
float:right;
height: 36px;
width: 36px;
border-style: solid;
border-width: 1px;
text-align: center;
line-height: 36px;
`;
const StarRating = (props) => {

  return (
    <div>
      <Wrapper>

        <StarRatings
          rating={props.rating}
          starRatedColor="#46B931"
          starDimension='25px'
          numberOfStars={5}
          starSpacing='0px'
          name='rating'
          />
          <Average>{props.rating}</Average>
          </Wrapper>
      </div>
  )
}

export default StarRating;