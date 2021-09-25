import React from 'react'
import { useState, useEffect } from "react";
import Web3 from "web3";
import { getWeb3, getPetsContract } from "../WalletConnection/config";


export async function checkWeb3() {
  const balance = await (await getWeb3()).eth.getBalance(window.ethereum.selectedAddress);
  console.log(balance);
  return balance;
}

export async function userNFTCount() {
  console.log(window.ethereum.selectedAddress);
  const result = await (await getPetsContract()).methods.balanceOf(window.ethereum.selectedAddress).call({ from: window.ethereum.selectedAddress });
  console.log(result)
  return result;
}

export async function totalSupplyCount() {
  const result = await (await getPetsContract()).methods.totalSupply().call({ from: window.ethereum.selectedAddress });
  console.log(result)
  return result;
}

export async function ownerTokens(index) {
  const result = await (await getPetsContract()).methods.tokenOfOwnerByIndex(window.ethereum.selectedAddress, index).call({ from: window.ethereum.selectedAddress });
  console.log(result)
  return result;
}

export async function getPetDNA(tokenId) {
  const result = await (await getPetsContract()).methods.getPetDNA(tokenId).call({ from: window.ethereum.selectedAddress });
  console.log(result)
  return result;
}
export async function buyNewPet(onSuccess, onFailure) {
  console.log(await getPetsContract());
  const result = (await getPetsContract()).methods.buyNewPet().send({ from: window.ethereum.selectedAddress, value: Math.pow(10, 16) })
  result.on("transactionHash", (hash) => {
    console.log("Transaction sent successfully. Check console for Transaction hash")
    console.log("Transaction Hash is ", hash)
  })
    .once("confirmation", (confirmationNumber, receipt) => {
      if (receipt.status) {
        onSuccess();
        console.log("Transaction processed successfully")
      } else {
        onFailure();
        console.log("Transaction failed");
      }
      console.log(receipt)
    })
}




