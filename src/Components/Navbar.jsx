
export default function () {
  return (
    <>
        <header className="relative flex justify-center w-screen h-20 text-white bg-black">
            <nav className="right-0 flex gap-8 p-8 "> 
                <a href="" className="hover:text-orange-800">Home</a>
                <a href="" className="hover:text-orange-800">About</a>
            </nav>
            <img src="./src/assets/Emergence.svg" alt="" className="w-[200px] mx-8"/>
            <nav className="right-0 flex gap-8 p-8 "> 
                <a href="" className="hover:text-orange-800">Events</a>
                <a href="" className="hover:text-orange-800">Contact</a>
            </nav>
        </header>
    </>
  )
}