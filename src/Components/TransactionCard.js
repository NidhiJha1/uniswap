import React from "react";
import styled from "styled-components";
import EthereunIcon from '../Images/ethCurrency.png';

const Card = styled.div`
 width:100%;
 display:flex;
 justify-content:space-between;
 align-items:center;
 background-color:#000;
 font-size:14px;
 margin-bottom:10px;
 padding:10px;
 border-radius:10px;
`;
const Data = styled.div`
 display:flex;
 align-items:center;
 width:20%;
`;
const Logo = styled.img`
 width:14px;
 margin-right:5px;
`;
const Link = styled.a`
 color:#0c75ff;
 text-decoration:none;
`;
const TransactionCard = ({transaction}) =>{

    // const date = new Date(transaction.timestamp);
    return(
        <Card>
            <Data>{transaction?.txHash.slice(0, 5)}....{transaction?.txHash.slice(transaction?.txHash?.length - 4)}</Data>
            <Data>{transaction?.toAddress.slice(0, 5)}....{transaction?.toAddress.slice(transaction?.toAddress.length - 4)}</Data>
            <Data>{transaction?.timestamp.slice(0,10)}</Data>
            <Data><Logo src={EthereunIcon}/> {transaction?.amount}</Data>
            <Data><Link href={`https://rinkeby.etherscan.io/tx/${transaction.txHash}`} target="_blank"> View on Etherscan</Link></Data>
        </Card>
    );
};

export default TransactionCard;