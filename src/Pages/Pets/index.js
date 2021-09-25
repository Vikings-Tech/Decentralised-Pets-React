import { useEffect, useState } from "react"
import PetCard from "../../Components/Cards/PetCard"
import { getPetDNA, ownerTokens, userNFTCount } from "../../DAppModules/Web3/integration"


const files = [
    {
        title: 'PET1',
        size: 'Very good',
        source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },
    {
        title: 'PET1',
        size: 'Very good',
        source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },
    {
        title: 'PET1',
        size: 'Very good',
        source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },
    {
        title: 'PET1',
        size: 'Very good',
        source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },
    {
        title: 'PET1',
        size: 'Very good',
        source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },
    {
        title: 'PET1',
        size: 'Very good',
        source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },
    {
        title: 'PET1',
        size: 'Very good',
        source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },
    {
        title: 'PET1',
        size: 'Very good',
        source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },
    // More files...
]

export default function Pets() {
    const [petsArray, setPetsArray] = useState([])
    useEffect(async () => {
        let newPetsArray = []
        const nftCount = await userNFTCount();
        for (let i = 0; i < nftCount; i++){
            let petObject = { id: i };
            petObject.token = await ownerTokens(i);
            petObject.pet = await getPetDNA(petObject.token);
            newPetsArray.push(petObject);
        }
        setPetsArray([...newPetsArray]);
    },[])
    return (
        <div className="container mx-auto pt-4 px-3">
            <h1>My Pets</h1>
            <ul role="list" className="flex flex-wrap items-center justify-around">
                {petsArray.map((petObject) => (
                    <PetCard petObject={petObject}/>
                ))}
            </ul>
        </div>
    )
}