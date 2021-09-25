import React, { useState } from 'react';
import { SetPetsContractListener } from '../../DAppModules/WalletConnection/configEvents';
import { buyNewPet } from '../../DAppModules/Web3/integration';
export default function () {
    const [text, setText] = useState("Click to buy");
    const [newPet, setNewPet] = useState("")
    const onTransactionPlacedSuccessful = (pet) => {
        setText("Success!");
    }
    const onTransactionCompletedSuccessful = (pet) => {
        setNewPet(pet);

    }
    return (<>
        <div className="flex  w-full " style={{height:"80vh"}}>
                <div class="flex flex-col items-center bg-white w-4/5 my-auto mx-auto p-6 -m-16 rounded-lg shadow-lg">
                    <h4 class="m-8 text-xl font-semibold uppercase leading-tight truncate">Yo waddup, get a pet bro</h4>
                    <div class="loader md-8">
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
                    <button
                        onClick={() => {
                            //TODO Setup listner
                            setText("Loading");
                            buyNewPet(onTransactionPlacedSuccessful);
                            SetPetsContractListener(onTransactionCompletedSuccessful)
                        }}
                        className="button mt-8"> {text}</button>
                    <div>{JSON.stringify(newPet)}</div>
                </div>

       
            </div>
    </>)
}