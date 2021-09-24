import {useState,useEffect} from "react";
import Web3 from "web3";
import Integration from "../Web3/integration";
import abi from "../Web3/ABI.json";
import { PocketProvider } from "@usedapp/core/node_modules/@ethersproject/providers";

let walletWeb3;
var MUMBAI_WSS = 'wss://rpc-mumbai.maticvigil.com/ws/v1/9a9736ed65423cc5678dd3653932d27facaf1e6b';
var provider = new Web3.providers.WebsocketProvider(MUMBAI_WSS); 

function MetaMask({children}){
  const dPetsContractAddress = "0x38250446B0cE0A34C84150ba8f0A12CEE4eDdF08";
  const [walletWeb3,setWallet] = useState()
  const [PetsContract,setPetsContract] = useState()
  
    useEffect(async () => {
      GetMetamask();

      PetsContract?.events.PetSale({fromBlock:'latest',filter:{userAddress:window.ethereum.selectedAddress}})
        .on('data',event=>console.log(event))
          
      }, [])


async function GetMetamask(){
  if(window.ethereum)
        {
        let web3 = await new Web3(provider);
        setWallet(web3);
        await window.ethereum.request({method:'eth_requestAccounts'});
        setPetsContract(new web3.eth.Contract(abi,dPetsContractAddress));
        }
        else
        {
        console.log("Metamask wallet not avaiable");
        }
        
        
}

return(
  <div><Integration web3={walletWeb3} PetsContract={PetsContract}/>
    { children}</div>
  
);
}
export default MetaMask;