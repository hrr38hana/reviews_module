import React from 'react';
import styled from 'styled-components';

const StarSelected = styled.div`
height:10px;
width:10px;
color:red;
margin:2px;
`;
const StarUnselected = styled.div`
height:10px;
width:10px;
color:black;
margin:2px;
`

const Star = (props) => {
  return (
    <div>
      {props.value === 1 ? <StarSelected name={props.index} onClick={props.click}>★</StarSelected> : <StarUnselected index={props.index} onClick={props.click} >★</StarUnselected>}
    </div>
  )
}

export default Star;
