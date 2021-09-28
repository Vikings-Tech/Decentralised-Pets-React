import { useEffect, useState } from "react"
import PetCard from "../../Components/Cards/PetCard"
import { getPetDNA, ownerTokens, userNFTCount } from "../../DAppModules/Web3/integration"


export default function Pets() {
    const [petsArray, setPetsArray] = useState(undefined)
    const [errorText, setErrorText] = useState(undefined);
    useEffect(async () => {
        let newPetsArray = []
        const onFailure = () => {
            setErrorText("Login to metamask and refresh the page!")
        }
        let nftCount;
        try {
        nftCount = await userNFTCount();
        }
        catch (e) {
            onFailure();
            return;
        }
        for (let i = 0; i < nftCount; i++){
            let petObject = { id: i };
            petObject.token = await ownerTokens(i);
            petObject.pet = await getPetDNA(petObject.token);
            newPetsArray.push(petObject);
        }
        setPetsArray([...newPetsArray]);
    }, [])
    if (errorText) {
        return(<div className="w-full h-screen mx-auto my-auto">
            <h1 className="w-full text-center text-2xl mt-2 font-semibold">{errorText}</h1>

        </div>)
    }
    return (
        <div className="mx-auto py-4 px-3">
            <h1 className="text-5xl capitalize  text-yellow-800 text-center w-full mt-2 font-semibold">My Pets</h1>

            {!petsArray && <div class="scene">

                <div class="plane">
                    <div class="cube cube--0">
                        <div class="cube__side"></div>
                        <div class="cube__side"></div>
                        <div class="cube__side"></div>
                        <div class="cube__side"></div>
                        <div class="cube__side"></div>
                        <div class="cube__side"></div>
                    </div>
                    <div class="shadow shadow--0"></div>
                    <div class="cube cube--1">
                        <div class="cube__side"></div>
                        <div class="cube__side"></div>
                        <div class="cube__side"></div>
                        <div class="cube__side"></div>
                        <div class="cube__side"></div>
                        <div class="cube__side"></div>
                    </div>
                    <div class="shadow shadow--1"></div>
                    <div class="cube cube--2">
                        <div class="cube__side"></div>
                        <div class="cube__side"></div>
                        <div class="cube__side"></div>
                        <div class="cube__side"></div>
                        <div class="cube__side"></div>
                        <div class="cube__side"></div>
                    </div>
                    <div class="shadow shadow--2"></div>
                    <div class="cube cube--3">
                        <div class="cube__side"></div>
                        <div class="cube__side"></div>
                        <div class="cube__side"></div>
                        <div class="cube__side"></div>
                        <div class="cube__side"></div>
                        <div class="cube__side"></div>
                    </div>
                    <div class="shadow shadow--3"></div>
                    <div class="cube cube--4">
                        <div class="cube__side"></div>
                        <div class="cube__side"></div>
                        <div class="cube__side"></div>
                        <div class="cube__side"></div>
                        <div class="cube__side"></div>
                        <div class="cube__side"></div>
                    </div>
                    <div class="shadow shadow--4"></div>
                    <div class="cube cube--5">
                        <div class="cube__side"></div>
                        <div class="cube__side"></div>
                        <div class="cube__side"></div>
                        <div class="cube__side"></div>
                        <div class="cube__side"></div>
                        <div class="cube__side"></div>
                    </div>
                    <div class="shadow shadow--5"></div>
                    <div class="cube cube--6">
                        <div class="cube__side"></div>
                        <div class="cube__side"></div>
                        <div class="cube__side"></div>
                        <div class="cube__side"></div>
                        <div class="cube__side"></div>
                        <div class="cube__side"></div>
                    </div>
                    <div class="shadow shadow--6"></div>
                    <div class="cube cube--7">
                        <div class="cube__side"></div>
                        <div class="cube__side"></div>
                        <div class="cube__side"></div>
                        <div class="cube__side"></div>
                        <div class="cube__side"></div>
                        <div class="cube__side"></div>
                    </div>
                    <div class="shadow shadow--7"></div>
                </div>
            </div>}
            <ul role="list" className="flex flex-wrap items-center justify-around">
                {petsArray?.map((petObject) => (
                    <PetCard petObject={petObject}/>
                ))}
            </ul>
        </div>
    )
}