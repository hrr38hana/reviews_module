import React from 'react';
import StarRatings from 'react-star-ratings';
import styled from 'styled-components';

const StarBar = styled.div`
position:relative;
background-color: #46B931;
width:65%;
height: 28px;
display:block;
`;
const StarOverlay = styled.div`
position:absolute;
height: 28px;
width: 28px;
background-color:white;
border-style: solid;
border-color: black;
border-width: 1px;
z-index:5;
`;
const Wrapper = styled.div`
width:148px;
height:28px;
`
const StarRating = (props) => {
  return (
    <div>

        <StarRatings
          rating={props.rating}
          starRatedColor="#46B931"
          numberOfStars={5}
          name='rating'
          svgIconPath="m 10 13.5 l -4.114 2.163 l 0.785 -4.581 l -3.328 -3.245 l 4.6 -0.669 L 10 3 l 2.057 4.168 l 4.6 0.669 l -3.328 3.245 l 0.785 4.581 Z"
        />
      </div>
  )
}

export default StarRating;