import React, { useContext, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { AiOutlineDown } from "react-icons/ai";
import styled from "styled-components";
import { TransactionContext } from "../context/TransactionContext";
import LogoImage from "../Images/uniswap.svg";
import EthereunIcon from '../Images/eth.png';

const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const Logo = styled.img`
  width: 50px;
`;
const LogoWrapper = styled.div`
 width:250px;
 display:flex;
`;

const ActionButtonContainer = styled.div`
  width:100%;
  background-color: #000;
  padding: 10px;
  display: flex;
  align-items: center;
  border-radius: 40px;
  width: 360px;
  justify-content: space-between;
`;
const Button = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 20px;
  border: none;
  background: ${(p) =>
    p.selected ? 'rgba(51, 51, 51, 0.6)' : "none"};
  color: #fff;
  cursor:pointer;
`;
const RightButtonWrapper = styled.div`
  display:flex;
  width:250px;
`;

const WalletConnection = styled.div`
  background-color: #000;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:10px;
  border-radius:20px;
  font-size:14px;
`;
const CunnectWalletButton = styled.button`
 background:none;
 border:none;
 color:#fff;
`;
const Icon = styled.img`
 width:24px;
 height:24px;
`;
const SelectChainWrapper = styled.div`
background-color: #000;
font-size:14px;
display:flex;
align-items:center;
padding:10px;
border-radius:20px;
margin-right:10px;
`;
const Span = styled.span`
  margin:0 5px;
`;

const Link = styled.a`
  text-decoration:none;
  color:#fff;
`;
const Navigation = () => {
  const { currentAccount, connectWallet } = useContext(TransactionContext);
  const [selectedNav, setSelectedNav] = useState('swap');
  return (
    <Header>
      <LogoWrapper>
        <Logo src={LogoImage} />
      </LogoWrapper>
      <ActionButtonContainer>
        <Button onClick={() => setSelectedNav('swap')} selected={selectedNav === 'swap'}>Swap</Button>
        <Button onClick={() => setSelectedNav('pool')} selected={selectedNav === 'pool'}>Pool</Button>
        <Button onClick={() => setSelectedNav('vote')} selected={selectedNav === 'vote'}>Vote</Button>
        <Button onClick={() => setSelectedNav('charts')} selected={selectedNav === 'charts'}>
          <Link href="https://info.uniswap.org/#/" target="_blank">Charts <FiArrowUpRight /></Link>
        </Button>
      </ActionButtonContainer>
      <RightButtonWrapper>
        <SelectChainWrapper>
             <Icon src={EthereunIcon}/>
             <Span>Ethereum</Span><AiOutlineDown/>
        </SelectChainWrapper>
        <WalletConnection>
          {currentAccount ? (
            <>{currentAccount.slice(0, 5)}....{currentAccount.slice(currentAccount.length - 4)}</>
          ) : (
            <CunnectWalletButton onClick={() => connectWallet()}>
              Connect Wallet 
            </CunnectWalletButton>
          )}
        </WalletConnection>
      </RightButtonWrapper>
    </Header>
  );
};

export default Navigation;
