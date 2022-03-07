import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import {SiEthereum} from "react-icons/si";
import {BsInfoCircle} from "react-icons/bs";
import Loader from "./Loader";

const Input = ({placeholder, name, type, value, handleChange}) => (
    <input
        placeholder={placeholder} 
        step="0.0001"
        name={name}
        type={type}
        value={value}
        onChange={(e) => handleChange(e, name)}
        className="my-2 w-full p-2 outline-none rounded-lg placeholder:text-gray-300 border-none text-sm white-glassmorpism " />
)

const ButtonSubmit = () => (
    <button
        type="submit"
        className="text-white w-full mt-2 border-[1px] p-2 border-white rounded-full cursor-pointer"
        onClick={() => console.log("click button submit")} >
            Send Now
    </button> 
)

const Welcome = () => {
    const [loading, setLoading] = React.useState(false);

    const connectWallet = () => {
        console.log("connect wallet..");
    }

    //sytling
    const commonStyle = `min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center text-white
                        items-center border-[1px] border-gray-300 text-center cursor-pointer`;

    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start flex-col mf:mr-10">
                    <h1 className="text-3xl sm:text-5xl text-white py-1">Send Crypto <br />accross the world </h1>
                    <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
                        Explore the crypto world. Buy and Sell Cryptocurrencies easily on Krypto
                    </p>
                    <button
                        className="flex flex-row justify-center items-center 
                                    my-5 py-5 bg-[#2952e3] rounded-full cursor-pointer hover:bg-[#2546bd]"
                        type="button"
                        onClick={connectWallet}>
                        <p className="text-white text-base">Connect Wallet</p>
                    </button>
                    <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
                        <div className={`rounded-tl-2xl ${commonStyle}`}>
                            Realibility
                        </div>
                        <div className={`${commonStyle}`}>
                            Security
                        </div>
                        <div className={`rounded-tr-2xl ${commonStyle}`}>
                            Etherium
                        </div>
                        <div className={`rounded-bl-2xl ${commonStyle}`}>
                            Web 3.0
                        </div>
                        <div className={`${commonStyle}`}>
                            Low Fees
                        </div>
                        <div className={`rounded-br-2xl ${commonStyle}`}>
                            Blockchain
                        </div>
                    </div>
                </div>
                <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
                    <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-80 w-full my-5 eth-card white-glassmorpism">
                        <div className="flex flex-col justify-between w-full h-full">
                            <div className="flex justify-between items-start ">
                                {/* circle */}
                                <div className="w-10 h-10 rounded-full border-white border-2 flex justify-center items-center ">
                                    <SiEthereum fontSize={21} className="text-white cursor-pointer" />    
                                </div>
                                <BsInfoCircle fontSize={17} className="text-white cursor-pointer" />
                            </div>
                            <div>
                                <p className="text-white font-light text-sm">
                                    Address
                                </p>
                                <p className="text-white font-semibold text-lg mt-1 ">
                                    Etherium
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-5 sm:w-96 w-full fle flex-col justify-start items-center 
                                    border-[1px] border-white ">
                        <Input 
                            placeholder="address to" 
                            name="address"
                            type="text"
                            handleChange={() => console.log("handle change..")}/>
                        <Input 
                            placeholder="amount (ETH)" 
                            name="amount"
                            type="number"
                            handleChange={() => {}}/>
                        <Input 
                            placeholder="keyword (Gif)" 
                            name="keyword_gif"
                            type="text"
                            handleChange={() => {}}/>
                        <Input 
                            placeholder="message" 
                            name="message"
                            type="text"
                            handleChange={() => {}}/>

                        <div className="h-[1px] w-full bg-white my-2" />

                        {
                            loading 
                                ? <Loader />
                                : <ButtonSubmit />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;