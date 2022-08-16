import React from 'react';
import styled from 'styled-components';



function FormInput() {
  return (
    <Container>
    <form>
    <label>Your Monthly Salary
      <input type="text" />
    </label>
  </form>

  <form>
    <div for='drop-down'>Currency</div>
    <div className="field__wrap">
    <select name="hour_per_day" id="hours of work" className='field_input'>

    <option value="1">₦</option>
    <option value="2">$</option>
    <option value="3">£</option>
    <option value="4">€</option>
    </select>
    </div>    
  </form>

  <form>
    <div for='drop-down'>How Many Weeks Do You Work Per Month</div>
    <div className="field__wrap">
    <select name="hour_per_day" id="hours of work" className='field_input'>

    <option value="1">1 Week</option>
    <option value="2">2 Weeks</option>
    <option value="3">3 Weeks</option>
    <option value="4">4 Weeks</option>
    </select>
    </div>    
  </form>

  <form>
    <div for='drop-down'>How Many Days Do You Work Per Week?</div>
    <div className="field__wrap">
    <select name="hour_per_day" id="hours of work" className='field_input'>

    <option value="1">1 Day</option>
    <option value="2">2 Days</option>
    <option value="3">3 Days</option>
    <option value="4">4 Days</option>
    <option value="5">5 Days</option>
    <option value="6">6 Days</option>
    <option value="7">7 Days</option>
    </select>
    </div>    
  </form>

  <form>
    <div for='drop-down'>How Many Hours Do You Work Per Day?</div>
    <div className="field__wrap">
    <select name="hour_per_day" id="hours of work" className='field_input'>

    <option value="1">1 hour</option>
    <option value="2">2 hours</option>
    <option value="3">3 hours</option>
    <option value="4">4 hours</option>
    <option value="5">5 hours</option>
    <option value="6">6 hours</option>
    <option value="7">7 hours</option>
    <option value="8">8 hours</option>
    <option value="9">9 hours</option>
    <option value="10">10 hours</option>
    <option value="11">11 hours</option>
    <option value="12">12 hours</option>
    
    </select>
    </div>    
  </form>
    <button className='form-button' type='submit'>
      Calculate
    </button>
  
  </Container>
  )
}

export default FormInput


const Container = styled.form`
display: flex; 
flex-direction: column;
margin-bottom: 20px;
margin: 0 8px;



input {
    width: 100%;
    height: 40px;
    border: 2px solid #E6E8EC;
    margin-bottom: 30px;
    border-radius: 10px
    border-style: solid;
  
    
    
}
label {
    font-size: 15px;
    font-weight: 500;
    margin-top: 5px;
}

button {
  display: flex
  padding-left: 40px;
  padding-right: 40px; 
  font-weight: 300;
  justify-items: center;
  align-items: centre;
  width: 20%;
  background-color: #10AA9F;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
}
select {
  height: 48px;
  padding 0 14px;
  font-size: 16px;
  width: 100%;
  border: 2px solid #E6E8EC;
  border-style: solid;
  border-radius: 8px;
  margin-bottom: 30px; 
  color: #9C9C9C; 
  
}



`
    

