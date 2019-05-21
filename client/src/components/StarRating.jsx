import React from 'react';
import StarRatings from 'react-star-ratings';
import styled from 'styled-components';

const Wrapper = styled.div`
width:100%;
height:28px;
`
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
          </Wrapper>
      </div>
  )
}

export default StarRating;