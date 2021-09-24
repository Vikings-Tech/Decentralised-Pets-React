import React from 'react'
import {useState,useEffect} from "react";
import Web3 from "web3";
const Integration = ({web3}) => {

    async function checkWeb3(){
        const balance = await web3.eth.getBalance(window.ethereum.selectedAddress);
        console.log(balance);
    }
    
    
    return (
        
        <div>
            <button type="button" className="button" onClick={checkWeb3}>Test</button> 
        </div>
    )
}

export default Integration
