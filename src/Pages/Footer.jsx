import { IoLogoInstagram,IoLogoLinkedin,} from "react-icons/io";
import { AiOutlineWhatsApp,AiOutlineMail } from "react-icons/ai";

export default function () {
    return(
        <>
        <footer className="flex flex-col items-center w-screen gap-1 py-10 text-white bg-black h-fit">
            <img src="./src/assets/Emergence.svg" alt=""  className="w-[200px]"/>

            <div className="flex gap-3 text-black">
                <a className="bg-white w-[6vh] h-[6vh] rounded-full flex justify-center items-center hover:bg-orange-700 hover:cursor-pointer"><IoLogoInstagram size={20}/></a>                
                <a className="bg-white w-[6vh] h-[6vh] rounded-full flex justify-center items-center hover:bg-orange-700 hover:cursor-pointer"><IoLogoLinkedin size={20}/></a>                
                <a className="bg-white w-[6vh] h-[6vh] rounded-full flex justify-center items-center hover:bg-orange-700 hover:cursor-pointer"><AiOutlineMail size={20} /></a>                
                <a className="bg-white w-[6vh] h-[6vh] rounded-full flex justify-center items-center hover:bg-orange-700 hover:cursor-pointer"><AiOutlineWhatsApp size={20}/></a>                
            </div>
            <p className="font-extralight">Copyrighted by Harikrishna A</p>
        </footer>
        
        </>
    )

}