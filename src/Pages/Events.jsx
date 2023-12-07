import { useEffect,useState } from "react"
import EventCard from "../Components/EventCard"
import {db} from "../config/firebase"
import {getDocs,collection} from "firebase/firestore"
import EventDetail from "../Components/EventDetail"

export default function()
{
    const [eventList,setEventList]=useState([])
    const [eventView,setEventView]=useState(-1)
    const [eventDetailTab,setEventDetailTab]=useState(false)
    const ToggleEventTab=(eventnum)=>{
        setEventDetailTab(!eventDetailTab)
        setEventView(eventnum)
    }
    
    const EventsCollection=collection(db,"events")
    
    useEffect(()=>{
    const getEventList = async () =>{
        try{
            
            const data=await getDocs(EventsCollection)
            const filteredData=data.docs.map((doc)=>({...doc.data(),id:doc.id}))
            setEventList(filteredData)
        }
        catch(e)
        {
            console.log(e)
        }
    }
    getEventList();
    },[])

    useEffect(()=>{console.log(eventDetailTab)},[eventDetailTab])
    return(
        <>
            <section className="relative w-screen p-10 m-5 h-fit max-[710px]:m-0 max-[710px]:p-0" id="Events" data-aos="fade-up">
                <h1 className="text-5xl text-white max-[710px]:px-10  font-bold relative before:w-[70px] before:h-2 before:bg-white before:absolute before:-bottom-4 before:rounded-full">Events</h1>
                <div className="flex flex-wrap w-screen gap-10 pt-20 max-[710px]:justify-center">
                    <EventDetail currentState={eventDetailTab} Close={()=>{setEventDetailTab(!eventDetailTab);console.log(eventDetailTab);}} {...eventList[eventView]}/>
                    {
                        eventList.map((events,i)=>{
                            return <EventCard key={events.EventName} id={i} EventName={events.EventName} EventImage={events.EventImage} EventDate={events.EventDate} SetState={ToggleEventTab}/>
                        })  
                    }
                </div>
            </section>
        </>
    )
}