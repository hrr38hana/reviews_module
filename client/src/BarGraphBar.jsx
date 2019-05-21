import React from 'react';
import styled from 'styled-components';


const StyledBar = styled.div`
width: ${props => props.width}%;
height: 20px;
background-color: green;
`

const Bar = props => {
  return (
    <div>

    <StyledBar width={props.width} />
    <span>{props.revs}</span>
    </div>
  )
}

export default Bar;