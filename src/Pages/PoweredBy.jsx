export default function () {
    return(
        <>
            <div className="w-screen p-10 m-5 h-fit">
                <h1 className="text-5xl text-white font-bold relative before:w-[5%] before:h-2 before:bg-white before:absolute before:-bottom-2 before:rounded-full">Powered By</h1>
                <div className="flex gap-10 py-10">
                    <div className="bg-black w-[20vw] h-[10vw]  flex justify-center items-center rounded-xl">
                        <img src="./src/assets/IEEE-logo-WHITE.svg" alt="" className="w-[243px]"/>
                    </div>
                    <div className="bg-black w-[20vw] h-[10vw]  flex justify-center items-center rounded-xl">
                        <img src="./src/assets/ieee_sb_cec_logo_white.svg" alt="" className="w-[243px]"/>
                    </div>
                    <div className="bg-black w-[20vw] h-[10vw]  flex justify-center items-center rounded-xl">
                        <img src="./src/assets/ias-png-white.png" alt="" className="w-[100px]"/>
                    </div>
                </div>
        
        
            </div>

        
        
        </>
    )
}