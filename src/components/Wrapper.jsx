
import styled from '@emotion/styled';
import React from 'react'

const WrapperBox = styled.div`
  min-height: calc(100vh );
  background-image: url("https://picsum.photos/1200/900");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;


function Wrapper (props)  {
  return (
    <WrapperBox>
        {props.children}
    </WrapperBox>
  )
}

export default Wrapper