
import { styled } from '@mui/system';
import React from 'react'
import svgIcon from "../assets/svg404.svg"

const MyComponent = styled('div')({
  color: 'darkslategray',
  backgroundColor: 'aliceblue',
  padding: 100,
  borderRadius: 4,
display: 'flex',
justifyContent: 'center'
});

const Page404 = () => {



  return (
    <MyComponent>
  
<img src={svgIcon} alt="" width={400}/>
</MyComponent>
  )
}

export default Page404