import React from "react";
import QRCode from "react-qr-code";

export default function PetCard ({petObject}) {
    return (
        <>
            <div className="w-1/4 my-8 mx-4">

                <img src={`${parseInt(petObject.pet[0])%2===0?"/assets/dog.gif":"/assets/pig.gif"}`} alt=" random imgee" class="w-full object-cover z-5 object-center pb-8 rounded-lg shadow-lg" style={{background:""}}/>

                <div class ="px-4 -mt-16 ">
                <div class ="bg-white p-6 rounded-lg shadow-lg">
              

                        <h4 class="mt-1 text-xl font-semibold uppercase leading-tight  w-full text-center  truncate">Pet { petObject.id+1}</h4>

                <div class ="mt-1 w-full text-center">
                        {/* { petObject.pet} */}
                        <span class="text-gray-600 text-sm">  </span>
                </div>
                {/* <div class ="mt-4">
                <span class ="text-teal-600 text-md font-semibold">4/5 ratings </span>
                <span class ="text-sm text-gray-600">(based on 234 ratings)</span>
                    </div> */}
                        <QRCode
                            size={150}
                            className="mx-auto" value={petObject.pet} />

                </div>
            </div>


            </div>
            </>
    );
}