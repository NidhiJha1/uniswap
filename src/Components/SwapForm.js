import React, { useContext, useState } from "react";
import styled from "styled-components";
import { RiSettings3Fill } from 'react-icons/ri';
import ethLogo from '../Images/eth.png';
import { AiOutlineDown } from 'react-icons/ai';
import { TransactionContext } from "../context/TransactionContext";

const Root = styled.div`
 width:100%;
`;
const Form = styled.form`
  display:flex;
  flex-direction:column;
  width:500px;
  margin:0 auto;
  padding:20px;
  background-color:#000;
  border-radius:30px;
`;
const Input = styled.input`
  width:100%;
  background-color: rgba(51, 51, 51, 0.6);
  border:none;
  padding:30px 20px;
  border-radius:10px;
  outline:none;
  color:#fff;
`;
const Button = styled.button`
  width:100%;
  background-color:#459ae3;
  border:none;
  padding:15px;
  border-radius:20px;
  cursor:pointer;
  color:#fff;
  font-weight:bold;
`;

const InputWrapper = styled.div`
 width:100%;
 margin-bottom:20px;
 position:relative;
`;
const ButtonWrapper= styled.div`
 width:100%;

`;

const HeadingWrapper = styled.div`
 display:flex;
 font-size:16px;
 display:flex;
 align-items:center;
 justify-content:space-between;
 margin-bottom:20px;
`;
const Text = styled.div`

`;
const IconWrapper = styled.div`
 position:absolute;
 top:10px;
 right:10px;
 background-color:#000;
 font-size:14px;
 padding:7px 15px;
 border-radius:20px;
 display:flex;
 align-items:center;
`;
const Icon = styled.img`
 width:20px;
 margin-right:5px;
`;
const SwapForm = () => {
  const {formData,handleChange,sendTransaction,isLoading} = useContext(TransactionContext);
  const onSubmitHandler = (e) =>{
    const {addressTo,amount} = formData;
    e.preventDefault();
    console.log(addressTo,amount);
    if(!addressTo || !amount) return 
    sendTransaction();
  }
    return(
        <Root>
          <Form>
            <HeadingWrapper>
                 <Text>Swap</Text>
                 <RiSettings3Fill/>
            </HeadingWrapper>
             <InputWrapper>
                  <Input  name="amount" pattern='^[0-9]*[.,]?[0-9]*$' placeholder='0.0' onChange={(e) => handleChange(e,'amount')}/>
                  <IconWrapper>
                         <Icon src={ethLogo}/>Eth <AiOutlineDown  style={{marginLeft:'5px'}}/>
                  </IconWrapper>
             </InputWrapper>
             <InputWrapper>
                    <Input  name="addressTo" placeholder="0x..." onChange={(e) => handleChange(e,'addressTo')}/>
              </InputWrapper>
              
              <ButtonWrapper>
                 <Button onClick={onSubmitHandler}>{isLoading ? 'Loading...' :'Confirm'}</Button>
              </ButtonWrapper>
          </Form>
        </Root>
    );
};

export default SwapForm;