import React from 'react';
import styled from 'styled-components';
import Con from './Con.jsx'

const Chart = styled.div`
flex-grow: 1;
height:250px;
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

const Cons = props => {
  
  let consObj = {}
  if(props.reviews.length) {
    for (var i in props.reviews) {
      if (!consObj[props.reviews[i].cons]) {
        consObj[props.reviews[i].cons] = 1;
      }
      else consObj[props.reviews[i].cons]++;
    }
    
    return (
      <Chart>
        <Header>Cons</Header>
        {Object.entries(consObj).map((el, i) => {
          return el[0] === '' ? null : <Con entry={el} key={i}/>
        })}
      </Chart>
    )
  }
  else return (
    <Chart/>
  )
}

export default Cons;