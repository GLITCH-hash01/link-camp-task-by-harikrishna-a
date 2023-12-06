import Navbar from "../Components/Navbar"
import Timer from "../Components/Timer"

export default function(){
    return(
        <>
            <section className="w-screen h-screen text-white bg-black bg-center bg-contain" style={{backgroundImage:'url("./src/assets/DSC08047.JPG")',borderImage:'fill 0 linear-gradient(#000,#0003)'}}>
                <Navbar />
                <div className="flex flex-col justify-center h-[80%] items-center">
                    <h1 className="text-6xl font-bold">EMERGENCE 3.0</h1>
                    <p className="text-4xl">All Kerala Techno-Managerial Conclave 2023</p>
                    <p className="text-xl">November 4th-5th @ College of Engineering Chengannur</p>
                    <Timer/>
                    <button className="p-3 px-5 border rounded-full">Register now</button>
                </div>
                <img src="./src/assets/layered-waves-haikei.svg" alt="" className="w-screen"/>
                
            </section>
        </>
    )
}