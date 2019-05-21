import React from 'react';
import styled from 'styled-components';

const BarWrapper = styled.div`
display:flex;
align-items: center;
justify-content: center;
height: 30px;
&:hover {
  background-color: #F6F5F6
}
color: #0A7BC1;
`;
const ContainerBar = styled.div`

border-radius: 2px;
width: 100%;
height:25px;
background-color: #F6F5F6;
&:hover {
  background-color: white;
}
${BarWrapper}:hover & {
  background-color: white;
}
`;
const RenderedBar = styled.div`
border-radius:2px;
width: ${props => props.width}%;
height: 25px;
background-color: #f7941d;
${BarWrapper}:hover & {
  background-color: #0A7BC1;
}
`;
const RevsTotal = styled.div`
color: black;
font-weight: bold;
display:inline;
width: 30px;
text-align: right;
padding-right: 15px;
`
const StarIndicator = styled.div`
width:30%;
font-family: Helvetica, Arial, sans-serif;
font-size: 16px;
padding: 0 15px;
`

const Bar = props => {
  return (
    <div>
      <BarWrapper>
        <StarIndicator>
          {props.value} Stars
      </StarIndicator>
        <ContainerBar>
          <RenderedBar width={props.width} />
        </ContainerBar>
        <RevsTotal>{props.revs}</RevsTotal>
      </BarWrapper>
    </div>
  )
}

export default Bar;