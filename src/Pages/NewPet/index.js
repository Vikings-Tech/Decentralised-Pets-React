import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { SetPetsContractListener } from '../../DAppModules/WalletConnection/configEvents';
import { buyNewPet } from '../../DAppModules/Web3/integration';
export default function () {
    const history = useHistory();
    const [text, setText] = useState("Click to buy");
    const [buyState, setBuyState] = useState("toStart");
    const [newPet, setNewPet] = useState(undefined)
    const onTransactionPlacedSuccessful = (pet) => {
        setText("Transaction Placed Successfully! Please wait while your egg hatches!!");
    }
    const onTransactionCompletedSuccessful = (pet) => {
        setNewPet(pet?.returnValues?.DNA);
        setText("Yaayy!")
        console.log(pet?.returnValues?.DNA);

    }
    return (<>{newPet ? <div className={`flex mx-auto w-2/3`} style={{ height: "80vh" }}>
        <div class="flex flex-col items-center bg-white w-4/5 my-auto mx-auto p-6 -m-16 rounded-lg shadow-lg">
            <h4 class="m-8 text-xl font-semibold text-center uppercase leading-tight truncate">Congratulations!</h4>
            <img src={`${parseInt(newPet[0]) % 2 === 0 ? "/assets/dog.gif" : "/assets/pig.gif"}`} />
            <button
                onClick={() => {
                    setNewPet(undefined);

                    //TODO Setup listner
                    setText("Please complete the transaction!");
                    setBuyState("buying");
                    buyNewPet(onTransactionPlacedSuccessful);
                    SetPetsContractListener(onTransactionCompletedSuccessful)
                }}
                className="button mt-8"> {"Buy Again!"}</button>
        <button
            onClick={() => {
                    setNewPet(undefined);
                    setBuyState("toStart");
                    setText("Click to Buy");
                    history.push("/pets")
            }}
            className="button mt-8"> {"See All pets"}</button>
    </div>


    </div> : <div className={`flex mx-auto w-2/3`} style={{ height: "80vh" }}>
        <div class="flex flex-col items-center bg-white w-4/5 my-auto mx-auto p-6 -m-16 rounded-lg shadow-lg">
                <h4 class="m-4 text-5xl font-semibold text-center  leading-tight truncate">One Egg,</h4>
                {buyState === "toStart" && <img src={`${"/assets/bolt.gif"}`} />}
                <h4 class="m-4 text-4xl font-semibold text-center  leading-tight truncate">Unlimited Possibilites!</h4>

            {buyState === "buying" &&
                <div class={`loader md-8 `}>
                    <div class="dot dot1"><i></i></div>
                    <div class="dot dot2"><i></i></div>
                    <div class="dot dot3"><i></i></div>
                    <div class="dot dot4"><i></i></div>
                    <div class="dot dot5"><i></i></div>
                    <div class="dot dot6"><i></i></div>
                    <div class="dot dot7"><i></i></div>
                    <div class="dot dot8"><i></i></div>
                    <div class="dot dot9"><i></i></div>
                </div>
                }
                
            {buyState === "toStart" ?
                <button
                    onClick={() => {
                        //TODO Setup listner
                        setText("Please complete the transaction!");
                        setBuyState("buying");
                        buyNewPet(onTransactionPlacedSuccessful);
                        SetPetsContractListener(onTransactionCompletedSuccessful)
                    }}
                    className="button mt-8"> {text}</button>
                : <div className="mt-8">{text}</div>
            }


        </div>


    </div>

}
       
    </>)
}