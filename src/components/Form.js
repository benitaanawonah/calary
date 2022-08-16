import React from 'react';
import styled from 'styled-components';
import FormInput from './FormInput';
// import FormLabelSizingExample from './FormLabel';

function Form() {
  return (
    
       <Container>
        <h3>Check how much you earn periodically.</h3>
        
        <div>
          <FormInput />
        </div>

       {/* <FormInput />
       <FormInput />
       <FormInput />
       <FormInput /> */}

       </Container>
        
  )
}

export default Form

 const Container = styled.div`
 
 width: 1000px;
 max-width: 100%;
 padding: 20px 20px;
 margin: 40px auto;
 height: 90vh;
 background: #ffffff; 
 box-shadow: 0 0 1px rgb(20 20 20 8%), 0 1px 8px 2px rgb(20 20 20 / 8%);
 border-radius: 8px;
 font-family: 'brown', sans-serif;
 font-weight: normal;
 color: #171616;

 h3 {
  margin: 0px 0px 48px;
  
 }


`

    
    
