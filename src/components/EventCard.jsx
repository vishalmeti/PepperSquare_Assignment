import { CalendarRange } from "lucide-react"
import "../Eventcard.css"
import galary from "../assets/galary.png"
import school from "../assets/school1.png"
import { useState } from "react"

const EventCard = ({ img, title, date }) => {
  const callOpener = () => {
    const event = new CustomEvent('openOverlay', { detail: { data: {
      img,
      title,
      date
    } } });
    window.dispatchEvent(event);
  }
  return (
    <div className='eventCard' onClick={callOpener} >
      <img src={img} alt="" className="eventImage" />
      <div className="eventTitle">
        <div className="eventName">
          {title}
        </div>
        <div className="eventDate">
          <CalendarRange height={15} width={15} color="blue" />
          {date}
        </div>
      </div>
    </div>
  )
}

export default EventCard