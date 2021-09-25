import React from "react";
import QRCode from "react-qr-code";

export default function PetCard ({petObject}) {
    return (
            <div className="my-8 mx-4">

                <img src="https://source.unsplash.com/random/350x350" alt=" random imgee" class="w-full object-cover object-center rounded-lg shadow-md"/>

                <div class ="relative px-4 -mt-16  ">
                <div class ="bg-white p-6 rounded-lg shadow-lg">
              

                    <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">Pet { petObject.id+1}</h4>

                <div class ="mt-1">
                        { petObject.pet}
                        <span class="text-gray-600 text-sm">  </span>
                </div>
                {/* <div class ="mt-4">
                <span class ="text-teal-600 text-md font-semibold">4/5 ratings </span>
                <span class ="text-sm text-gray-600">(based on 234 ratings)</span>
                    </div> */}
                    <QRCode value={petObject.pet} />

                </div>
            </div>


            </div>
    );
}