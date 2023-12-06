import { IoMdClose } from "react-icons/io";

export default function (props) {
    return(
    <>
        <div className={" z-50 flex items-center justify-center w-screen h-screen text-white "+(props.currentState? "fixed top-0 ":"hidden")}>
            <div className="w-[70vw] h-[40vw] bg-black flex relative">
                <div className="flex h-full w-[70%] justify-center items-center">
                    <img src={"https://firebasestorage.googleapis.com/v0/b/ieee-link-task-by-hari.appspot.com/o/"+(props.EventImage)} alt="" className="w-[350px] p-10"/>
                </div>
                <div className="flex flex-col justify-center w-full h-full gap-5 py-14">
                    <h1 className="text-4xl font-bold"> {props.EventName}</h1>
                    <p>{props.EventDescription}</p>
                    <p>Date:{props.EventDate}</p>
                    <p>Venue:{props.EventVenue}</p>
                    <p>Time:{props.EventTime}</p>
                </div>
                <IoMdClose className="absolute text-gray-500 cursor-pointer right-3 top-3" size={30} onClick={()=>{props.Close()}}/>
            </div>
        </div>
    </>)

}