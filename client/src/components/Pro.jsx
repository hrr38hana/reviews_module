import React from 'react';
import styled from 'styled-components';

const ProEntry = styled.div`

`

const Pro = (props) => {
  return (
    <div>
      <ProEntry>{props.entry[1]}{props.entry[0]}</ProEntry>
    </div>
  )
}



export default Pro;