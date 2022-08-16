import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Container>
        Calary.  
        {/* <a href=''> */}
        <span>Salary Calculator</span>
        {/* </a> */}
    

    </Container>
    
    
  )
}

export default Header

const Container = styled.div`
margin-right: 40px;
margin-top: 30px;
display: flex;
justify-content: space-between;
color: #4E4376;
font-family: 'brown', sans-serif;
font-size: 40px;
line-height: 1.2; 
letter-spacing: -.01em;
font-weight: 600;
padding: 0 36px;

// a {
//     display: flex;
//     margin-top: 20px;
// }

span {
    display: flex;
    font-size: 20px;
    color: black;
    margin-top: 20px
    

}

`

    


