import React from 'react';
import StarRatings from 'react-star-ratings';


const StarRating = (props) => {
  return (
    <div>
        <StarRatings
          rating={props.rating}
          starRatedColor="green"
          numberOfStars={5}
          name='rating'
        />
      </div>
  )
}

export default StarRating;