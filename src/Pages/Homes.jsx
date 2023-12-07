import Navbar from "../Components/Navbar"
import Timer from "../Components/Timer"

export default function(){
    return(
        <>
            <section className="relative w-screen h-screen text-white bg-black bg-center bg-cover" id="Home" style={{backgroundImage:'url("./assets/Background.webp")',borderImage:'fill 0 linear-gradient(#0B2434,#0003)'}}>
                <Navbar />
                <div className="flex flex-col justify-center h-[80%] items-center" data-aos="zoom-in">
                    <h1 className="text-7xl font-bold  max-[710px]:text-4xl max-[540px]:text-2xl">EMERGENCE 3.0</h1>
                    <p className="text-3xl pt-4 max-[710px]:text-xl max-[540px]:text-sm">All Kerala Techno-Managerial Conclave 2023</p>
                    <p className="text-xl pt-2 max-[710px]:text-lg max-[540px]:text-xs">November 4th-5th @ College of Engineering Chengannur</p>
                    <Timer/>
                    <button className="p-3 px-5 transition-all border rounded-full font-bold hover:bg-[#01948A] hover:border-black hover:text-black ">REGISTER NOW</button>
                </div>
                <img src="./assets/wave.svg" alt="wave design"  className="absolute w-screen -bottom-2"/>
            </section>
        </>
    )
}