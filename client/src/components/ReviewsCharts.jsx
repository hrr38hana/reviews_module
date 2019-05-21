import styled from 'styled-components';
import StarRating from './StarRating.jsx'
import BarGraph from './BarGraph.jsx'
import React from 'react';
import ReactDOM from 'react-dom';

const ChartsWrapper = styled.div`
display:flex;
justify-content: center;
`

const ReviewsCharts = props => {
  return (
    <div>
      <ChartsWrapper>
        <BarGraph reviews={props.reviews} />
        <BarGraph reviews={props.reviews} />
        <BarGraph reviews={props.reviews} />
      </ChartsWrapper>
    </div>
  )
}

export default ReviewsCharts;