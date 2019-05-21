import React from 'react';
import styled from 'styled-components';

const ConEntry = styled.div`

`

const Con = (props) => {
  return (
    <div>
      <ConEntry>{props.entry[1]}{props.entry[0]}</ConEntry>
    </div>
  )
}



export default Con;