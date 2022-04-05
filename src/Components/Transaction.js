import React, { useContext, useEffect, useState } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { client } from "../lib/SanityClient";
import styled from 'styled-components';
import TransactionCard from "./TransactionCard";

const Root = styled.div`
    width:60%;
    display:flex;
    flex-direction:column;
    justify-content:right;
`;

const Transaction = () =>{
    const { isLoading, currentAccount } = useContext(TransactionContext)
    const [transactionHistory, setTransactionHistory] = useState([]);

    useEffect(() => {
        ;(async () => {
          if (!isLoading && currentAccount) {
            const query = `
              *[_type=="users" && _id == "${currentAccount}"] {
                "transactionList": transactions[]->{amount, toAddress, timestamp, txHash}|order(timestamp desc)[0..4]
              }
            `
    
            const clientRes = await client.fetch(query);
    
            setTransactionHistory(clientRes[0].transactionList);
          }
        })()
      }, [isLoading, currentAccount])

      console.log(transactionHistory);
    return(
        <Root>
           {transactionHistory?.map((transaction) =>{
               return(
                   <TransactionCard key={transaction.txHash} transaction={transaction}/>
               )
           })}
        </Root>
    );
};

export default Transaction;