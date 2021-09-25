import {useState,useEffect} from "react";
import Web3 from "web3";
import Integration from "../Web3/integration";
import abi from "../Web3/ABI.json";
import { PocketProvider } from "@usedapp/core/node_modules/@ethersproject/providers";

let walletWeb3, PetsContract;
var MUMBAI_WSS = 'wss://rpc-mumbai.maticvigil.com/ws/v1/9a9736ed65423cc5678dd3653932d27facaf1e6b';
var provider = new Web3.providers.WebsocketProvider(MUMBAI_WSS);
const dPetsContractAddress = "0x38250446B0cE0A34C84150ba8f0A12CEE4eDdF08";


export const getWeb3 = async() => {
  if (!walletWeb3) {
     walletWeb3 = await new Web3(provider);
  }
  return walletWeb3;

}
export const getPetsContract = async() => {
  if (!PetsContract) {
    PetsContract = new (await getWeb3()).eth.Contract(abi, dPetsContractAddress);
  }
  return PetsContract;
  
}
export const SetPetsContractListener = (onSuccess, onFailure) => {
  PetsContract?.events.PetSale({ fromBlock: 'latest', filter: { userAddress: window.ethereum.selectedAddress } })
    .on('data', event => {
      console.log(event)
      onSuccess();
    })
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

