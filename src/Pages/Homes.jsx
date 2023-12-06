import Navbar from "../Components/Navbar"
import Timer from "../Components/Timer"

export default function(){
    return(
        <>
            <section className="w-screen h-screen text-white bg-black">
                <Navbar />
                <div className="flex flex-col justify-center h-[80%] items-center">
                    <h1 className="text-6xl font-bold">EMERGENCE 3.0</h1>
                    <p className="text-4xl">All Kerala Techno-Managerial Conclave 2023</p>
                    <p className="text-xl">November 4th-5th @ College of Engineering Chengannur</p>
                    <Timer/>
                </div>
                <img src="./src/assets/wave-haikei (3).svg" alt="" className="w-screen"/>
            </section>
        </>
    )
}