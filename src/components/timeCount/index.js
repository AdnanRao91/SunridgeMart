import React, { useState } from "react";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";


export default function TimeCount() {
    const currentDate = new Date(); // Fixed "newDate" to "new Date"
    const [count, setCount] = useState(10); // Fixed "newState" to "useState"
    const daysLatter = new Date(currentDate);
    daysLatter.setDate(currentDate.getDate() + count); // Changed "setCount" to "count"
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
      if (completed) {
        // Render a complete state
        return <span>Countdown Complete</span>; // Corrected "<exculsive />" to "<span>Countdown Complete</span>"
      } else {
        // Render a countdown
        return (
         <>
         <div className="flex justify-center gap-4">
            <div className="">
                <div className="box-exculsive text-center nova-bold black-text f-28 p-2 block">
                    {days}
                    <div className="f-14 text-light-black">Days</div>
                </div>
            </div>
            <div className="">
                <div className="box-exculsive text-center nova-bold black-text f-28 p-2 block">
                    {hours}
                    <div className="f-14 text-light-black">HRS</div>
                </div>
            </div>
            <div className="">
                <div className="box-exculsive text-center nova-bold black-text f-28 p-2 block">
                    {minutes}
                    <div className="f-14 text-light-black">MINS</div>
                </div>
            </div>
            <div className="">
                <div className="box-exculsive text-center nova-bold black-text f-28 p-2 block">
                    {seconds}
                    <div className="f-14 text-light-black">SECS</div>
                </div>
            </div>
         </div>
         </>
        );
      }
    };
  
    return (
      <>
        <Countdown date={daysLatter} renderer={renderer} />
      </>
    );
  }
  