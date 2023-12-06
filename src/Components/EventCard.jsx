import { IoChevronDown } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function (props) {
    
    return(
        <>
            <div className="group bg-black w-[20vw] h-fit flex flex-col hover:cursor-pointer" onClick={()=>{props.SetState(props.id)}}>
                <div className="w-full h-[20vw] group-hover:h-[16vw] transition-all bg-cover bg-no-repeat bg-bottom" style={{backgroundImage:`url(https://firebasestorage.googleapis.com/v0/b/ieee-link-task-by-hari.appspot.com/o/${props.EventImage})`}}></div>
                <div className="w-full h-[8vw] group-hover:h-[12vw] bg-[#01948A] flex items-center p-5 text-white  flex-col transition-all">
                    <h1 className="text-xl font-bold">{props.EventName}</h1>
                    <p className="flex items-center gap-2"><FaRegCalendarAlt />{props.EventDate}</p>
                    <div className="w-10 h-1 m-2 bg-white"></div>
                    <div className="items-center justify-center hidden w-full h-full group-hover:flex" >
                        <IoChevronDown />
                    </div>
                </div>
            </div>
        </>
    )
}