import { useState } from 'react';

export default function () {
  const [NavbarState, setNavbarState] = useState(false);
  
  return (
    <>
        {/* 540 new responsiveness */}
        <header className="relative flex justify-center w-screen h-20 text-white bg-transparent max-[540px]:hidden">
            <nav className="right-0 flex gap-8 p-8 max-[710px]:gap-4"> 
                <a href="#Home" className="hover:text-[#01948A]">Home</a>
                <a href="#About" className="hover:text-[#01948A]">About</a>
            </nav>
            <img src="./assets/Emergence.svg" alt="" className="w-[200px] mx-8 max-[710px]:w-[150px]"/>
            <nav className="right-0 flex gap-8 p-8 "> 
                <a href="#Events" className="hover:text-[#01948A]">Events</a>
                <a href="#Contacts" className="hover:text-[#01948A]">Contact</a>
            </nav>
        </header>
        <header className="hidden max-[540px]:flex bg-black w-screen h-[10%] relative">
            <div className="flex justify-center w-full">
                <img src="./assets/Emergence.svg" alt="" className="w-[200px]"/>
            </div>
            <div className="w-[15%] flex flex-col gap-2 justify-center" onClick={()=>{setNavbarState(!NavbarState)}}>
              <div className={"w-[60%] bg-white transition-all duration-300 h-[1px] "+(NavbarState? "rotate-45 translate-y-[5px]":"")}></div>
              <div className={"w-[60%] bg-white transition-all duration-300 h-[1px] "+(NavbarState? "hidden":"")}></div>
              <div className={"w-[60%] bg-white transition-all duration-300 h-[1px] "+(NavbarState? "-rotate-45 -translate-y-[5px]":"")}></div>              
            </div>
            <nav className={'absolute flex z-50 flex-col justify-center top-[100%] w-full transition-all duration-100 bg-black '+(NavbarState? "h-fit":"h-0 hidden")}>
                <a href="#Home" className="flex justify-center p-5">Home</a>
                <a href="#About" className="flex justify-center p-5">About</a>
                <a href="#Events" className="flex justify-center p-5">Events</a>
                <a href="#Contacts" className="flex justify-center p-5">Contact</a>
            </nav>
        </header>
    </>
  )
}