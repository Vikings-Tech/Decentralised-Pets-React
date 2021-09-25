import { useState, useEffect } from "react";
import Web3 from "web3";
import Integration from "../Web3/integration";
import abi from "../Web3/ABI.json";
import { PocketProvider } from "@usedapp/core/node_modules/@ethersproject/providers";

let walletWeb3, PetsContract;
var MUMBAI_WSS = 'wss://rpc-mumbai.maticvigil.com/ws/v1/9a9736ed65423cc5678dd3653932d27facaf1e6b';
var provider = new Web3(new Web3.providers.HttpProvider('https://rpc-mumbai.maticvigil.com/v1/9a9736ed65423cc5678dd3653932d27facaf1e6b'));;
const dPetsContractAddress = "0x97285845dbd14C7ba9d2d5871B3fB379a11a0F00";


export const getWeb3 = async () => {
  if (!walletWeb3) {
    walletWeb3 = await new Web3(window.ethereum);
  }
  return walletWeb3;

}
export const getPetsContract = async () => {
  if (!PetsContract) {
    PetsContract = new (await getWeb3()).eth.Contract(abi, dPetsContractAddress);
  }
  return PetsContract;

}
export const SetPetsContractListener = async (onSuccess, onFailure) => {
  (await getPetsContract()).once('PetSale', {
    filter: { userAddress: window.ethereum.selectedAddress },
    fromBlock: 'latest'
  }, function (error, event) {
    console.log(event)

    if (error) {
      console.log(error);
      onFailure();
      return;
    }
    onSuccess(event);
    console.log(event)
  });
  // (await getPetsContract()).events.PetSale({ fromBlock: 'latest', filter: { userAddress: window.ethereum.selectedAddress } })
  //   .on('data', event => {
  //     console.log(event)
  //     onSuccess();
  //   })
}
export const AuthenticateMetaMask = async () => {
  if (window.ethereum) {
    await getWeb3();
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    await getPetsContract();

    return true;
  }
  else {
    return false;
  }
}
getWeb3();

