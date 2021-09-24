import React from 'react'
import {useState,useEffect} from "react";
import Web3 from "web3";

const Integration = ({web3,PetsContract}) => {

    
  
    

    async function checkWeb3(){
        const balance = await web3.eth.getBalance(window.ethereum.selectedAddress);
        console.log(balance);
    }
    
    async function userNFTCount(){
        const result = await PetsContract.methods.balanceOf(window.ethereum.selectedAddress).call({from: window.ethereum.selectedAddress});
        console.log(result)
    }

    async function totalSupplyCount(){
        const result = await PetsContract.methods.totalSupply().call({from: window.ethereum.selectedAddress});
        console.log(result)
    }
    
    async function ownerTokens(index){
        const result = await PetsContract.methods.tokenOfOwnerByIndex(window.ethereum.selectedAddress,index).call({from: window.ethereum.selectedAddress});
        console.log(result)
    }

    async function getPetDNA(index){
        const result = await PetsContract.methods.getPetDNA(index).call({from: window.ethereum.selectedAddress});
        console.log(result)
    }
    async function buyNewPet(){
          const result = PetsContract.methods.buyNewPet().send({from: window.ethereum.selectedAddress,value:Math.pow(10,16)})
          result.on("transactionHash",(hash)=>{
            console.log("Transaction sent successfully. Check console for Transaction hash")
            console.log("Transaction Hash is ",hash)
          })
          .once("confirmation",(confirmationNumber,receipt)=>{
            if(receipt.status){
              console.log("Transaction processed successfully")
            }else{
              console.log("Transaction failed");
            }
            console.log(receipt)
          })
        }
    return (
        
        <div>
            <button type="button" className="button" onClick={totalSupplyCount}>Test</button> 
        </div>
    )
}

export default Integration
