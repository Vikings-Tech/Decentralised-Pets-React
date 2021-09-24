import {useState,useEffect} from "react";
import Web3 from "web3";
import Integration from "../Web3/integration";
let walletWeb3;
function MetaMask({children}){
  
  const [walletWeb3,setWallet] = useState()
    useEffect(async () => {
      GetMetamask();
      // console.log(walletWeb3.eth.currentProvider);
      // console.log(walletWeb3.eth.getBalance(window.ethereum.selectedAddress));
      }, [])


async function GetMetamask(){
  if(window.ethereum)
        {
        setWallet(new Web3(window.ethereum));
        await window.ethereum.request({method:'eth_requestAccounts'});
        }
        else
        {
        console.log("Metamask wallet not avaiable");
        }
}

return(
  <div><Integration web3={walletWeb3} />
    { children}</div>
  
);
}
export default MetaMask;