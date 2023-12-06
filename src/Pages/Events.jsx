import EventCard from "../Components/EventCard"

export default function()
{
    return(
        <>
            <section className="w-screen p-10 m-5 h-fit">
                <h1 className="text-5xl text-blue-800 font-bold relative before:w-[5%] before:h-2 before:bg-blue-800 before:absolute before:-bottom-2 before:rounded-full">Events</h1>
                <div className="flex flex-wrap w-screen gap-10 pt-20">
                    <EventCard/>
                    <EventCard/>
                    <EventCard/>
                    <EventCard/>

                </div>
                
            </section>
        </>
    )
}