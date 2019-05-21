import React from 'react';
import Bar from './BarGraphBar.jsx'
import styled from 'styled-components';

const Graph = styled.div`
height:250px;
width:30%;
max-width: 350px;
margin: 5px;
border-style: solid;
border-width: 1px;
border-color: #CCCCCC;
font-family: Helvetica, Arial, sans-serif;
`;
const Header = styled.div`
display:flex;
padding-left: 10px;
background-color: #F6F5F6;
width:auto;
height: 40px;
font-family: Helvetica, Arial, sans-serif;
font-weight: 700;
font-side: 16px;
align-items: center;
margin-bottom: 15px;
`

const BarGraph = props => {
  let stars = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
  }
  let total = 0;
  if (props.reviews.length !== 0) {
    for (var i in props.reviews) {
      stars[props.reviews[i].stars]++
      total++
    }
    return (
      <Graph>
        <Header>Ratings Distribution</Header>
        <Bar width={(stars[5] / total) * 100} revs={stars[5]} value={5}></Bar>
        <Bar width={(stars[4] / total) * 100} revs={stars[4]} value={4}></Bar>
        <Bar width={(stars[3] / total) * 100} revs={stars[3]} value={3}></Bar>
        <Bar width={(stars[2] / total) * 100} revs={stars[2]} value={2}></Bar>
        <Bar width={(stars[1] / total) * 100} revs={stars[1]} value={1}></Bar>
      </Graph>
    )
  }
  else return (
    <Graph />
  )

}

export default BarGraph;