
export default function () {
  return (
    <>
        <header className="bg-black w-screen h-20 flex justify-center relative text-white">
            <nav className=" flex right-0 gap-8 p-8"> 
                <a href="">Home</a>
                <a href="">About</a>
            </nav>
            <img src="./src/assets/Emergence.svg" alt="" className="w-[200px] mx-8"/>
            <nav className=" flex right-0 gap-8 p-8"> 
                <a href="">Events</a>
                <a href="">Contact</a>
            </nav>
        </header>
    </>
  )
}