import styled from 'styled-components';
import BarGraph from './BarGraph.jsx'
import React from 'react';
import StarRating from './StarRating.jsx'
import Pros from './Pros.jsx'
import Cons from './Cons.jsx'

const ChartsWrapper = styled.div`
display:flex;
flex-grow: 1;
justify-content: center;
`

const ReviewsCharts = props => {
  return (
    <div>


        <StarRating rating={props.rating}/><br/>
      <ChartsWrapper>
        <BarGraph reviews={props.reviews} />
        <Pros reviews={props.reviews}/>
        <Cons reviews={props.reviews}/>
      </ChartsWrapper>

    </div>
  )
}

export default ReviewsCharts;