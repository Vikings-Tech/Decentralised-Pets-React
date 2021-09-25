import React from 'react'
import {useState,useEffect} from "react";
import Web3 from "web3";
import { getWeb3, getPetsContract} from "../WalletConnection/config";


    async function checkWeb3(){
        const balance = await (await getWeb3()).eth.getBalance(window.ethereum.selectedAddress);
        console.log(balance);
    }
    
    async function userNFTCount(){
        const result = await (await getPetsContract()).methods.balanceOf(window.ethereum.selectedAddress).call({from: window.ethereum.selectedAddress});
        console.log(result)
    }

    async function totalSupplyCount(){
        const result = await (await getPetsContract()).methods.totalSupply().call({from: window.ethereum.selectedAddress});
        console.log(result)
    }
    
    async function ownerTokens(index){
        const result = await (await getPetsContract()).methods.tokenOfOwnerByIndex(window.ethereum.selectedAddress,index).call({from: window.ethereum.selectedAddress});
        console.log(result)
    }

    async function getPetDNA(tokenId){
        const result = await (await getPetsContract()).methods.getPetDNA(tokenId).call({from: window.ethereum.selectedAddress});
        console.log(result)
    }
    async function buyNewPet(){
          const result = (await getPetsContract()).methods.buyNewPet().send({from: window.ethereum.selectedAddress,value:Math.pow(10,16)})
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
        



export default {checkWeb3,buyNewPet}
