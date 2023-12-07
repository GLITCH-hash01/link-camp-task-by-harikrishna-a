import { useEffect, useState } from "react";

export default function (){
    const [days, setDays]=useState(0);
    const [hours, setHours]=useState(0);
    const [minutes, setMinutes]=useState(0);        
    const [seconds, setSeconds]=useState(0);    

    const deadline ="Dec 25, 2023 15:37:25"

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();
    
        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
      };



    useEffect(() => {
        const interval = setInterval(() => {
          getTime(deadline);
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);
      
    return(
        <>
            <div className="flex gap-10 p-11 max-[540px]:gap-5">
                <div className="flex flex-col items-center">
                    <p className="text-5xl max-[540px]:text-lg">{days.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}</p>
                    <p className="text-2xl font-light max-[540px]:text-lg">days</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-5xl max-[540px]:text-lg">{hours.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}</p>
                    <p className="text-2xl font-light max-[540px]:text-lg">hours</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-5xl max-[540px]:text-lg">{minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}</p>
                    <p className="text-2xl font-light max-[540px]:text-lg">minutes</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-5xl max-[540px]:text-lg">{seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}</p>
                    <p className="text-2xl font-light max-[540px]:text-lg">seconds</p>
                </div>
            </div>
        </>
    );


}