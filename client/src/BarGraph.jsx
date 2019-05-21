import React from 'react';
import Bar from './BarGraphBar.jsx'
import styled from 'styled-components';

const Graph = styled.div`
height:300px;
width:300px;
`;

const BarGraph = props => {
  let stars = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
  }
  let total = 0;
  if(props.reviews.length !== 0) {
    for (var i in props.reviews) {
      stars[props.reviews[i].stars]++
      total++
    }
    return (
      <Graph>
        <span>5 Stars</span><Bar width={(stars[5]/total)*100} revs={stars[5]}></Bar>
        <span>4 Stars</span><Bar width={(stars[4]/total)*100}revs={stars[4]}>stars[4]</Bar>
        <span>3 Stars</span><Bar width={(stars[3]/total)*100}revs={stars[3]}>stars[3]</Bar>
        <span>2 Stars</span><Bar width={(stars[2]/total)*100}revs={stars[2]}>stars[2]v</Bar>
        <span>1 Stars</span><Bar width={(stars[1]/total)*100}revs={stars[1]}></Bar>
      </Graph>
    )
  }
  else return (
    <Graph/>
  )

}


export default BarGraph;