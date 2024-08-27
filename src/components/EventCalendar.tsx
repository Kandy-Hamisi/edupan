'use client'

import Image from 'next/image';
import React, { useState } from 'react'
import Calendar from 'react-calendar';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];


// Temporary data
const events = [
    {
        id: 1,
        title: "Lorem Ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
        id: 2,
        title: "Lorem Ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
        id: 3,
        title: "Lorem Ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
        id: 4,
        title: "Lorem Ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit"
    }
];

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());
  return (
    <div>
      <Calendar onChange={onChange} value={value} />
      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-semibold my-4'>Events</h1>
        <Image src="/moreDark.png" width={20} height={20} alt='' />
      </div>
      <div className='flex flex-col gap-4'>
        {
            events.map((event) => (
                <div key={event.id} className='p-5 rounded-md border border-gray-100 border-t-4 odd:border-t-eduSky even:border-t-eduPurple'>
                    <div className='flex items-center justify-between'>
                        <h1 className='font-semibold text-gray-600'>{event.title}</h1>
                        <span className='text-gray-300 text-sm'>{event.time}</span>
                    </div>
                    <p className='mt-2 text-gray-400 text-sm'>{event.description}</p>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default EventCalendar
