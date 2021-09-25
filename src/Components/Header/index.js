import { Popover } from '@headlessui/react'
import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import { AuthenticateMetaMask } from '../../DAppModules/WalletConnection/config';
import { useState } from 'react';


export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { activateBrowserWallet, account } = useEthers();
    const etherBalance = useEtherBalance(account);
    console.log(window.ethereum.selectedAddress);
    return (
        <Popover className="relative bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="#">
                            <span className="sr-only">Workflow</span>
                            <img
                                className="h-8 w-auto sm:h-10"
                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                alt=""
                            />
                        </a>
                    </div>
                    <a href="/new" className="text-base font-medium text-gray-500 hover:text-gray-900">
                        Buy Egg
                    </a>
                    <a href="/pets" className="text-base font-medium text-gray-500 hover:text-gray-900">
                        My Pets
                    </a>
                    <a href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                        Shop
                    </a>
                    

                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">

                        <button
                            href="#"
                            className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                            onClick={() => setIsLoggedIn(AuthenticateMetaMask())}
                        >
                            {window?.ethereum?.selectedAddress ? `${window?.ethereum?.selectedAddress}`: "Connect to a wallet"}
                        </button>
                    </div>
                </div>
            </div>


        </Popover>
    )
}