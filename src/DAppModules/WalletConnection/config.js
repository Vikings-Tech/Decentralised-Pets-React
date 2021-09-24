import {useState,useEffect} from "react";
import Web3 from "web3";
import Integration from "../Web3/integration";
import abi from "../Web3/ABI.json";

let walletWeb3;
function MetaMask({children}){
  
  const [walletWeb3,setWallet] = useState()
  const [PetsContract,setPetsContract] = useState()
    useEffect(async () => {
      GetMetamask();
      
      }, [])


async function GetMetamask(){
  if(window.ethereum)
        {
        let web3 = await new Web3(window.ethereum)
        setWallet(web3);
        await window.ethereum.request({method:'eth_requestAccounts'});
        setPetsContract(new web3.eth.Contract(abi,dPetsContractAddress));
        console.log("HERE")
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