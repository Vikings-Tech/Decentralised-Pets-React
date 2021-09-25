import React, { useState } from 'react';
import { buyNewPet } from '../../DAppModules/Web3/integration';
export default function () {
    const [text, setText] = useState("Click to buy");
    const onSuccess = () => {
        setText("Success!");
    }
    return (<>
        <button
            onClick={() => {
                //TODO Setup listner
                setText("Loading");
                buyNewPet(onSuccess);
            }}
            className="button"> { text}</button>
    </>)
}