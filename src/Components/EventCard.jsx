import { IoChevronDown } from "react-icons/io5";

export default function () {
    return(
        <>
            <div className="group bg-black w-[20vw] h-fit flex flex-col hover:cursor-pointer">
                <div className="w-full h-[20vw] group-hover:h-[16vw] transition-all"></div>
                <div className="w-full h-[8vw] group-hover:h-[12vw] bg-blue-500 flex items-center p-5 text-white  flex-col transition-all">
                    <h1 className="font-bold text-xl">Track 1</h1>
                    <p>Date:09 Nov Time:9pm</p>
                    <div className="w-10 h-1 m-2 bg-white"></div>
                    <div className="group-hover:flex hidden justify-center items-center w-full h-full">
                        <IoChevronDown/>
                    </div>
                </div>
            </div>
        </>
    )
}