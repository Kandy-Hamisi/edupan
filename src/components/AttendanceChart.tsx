'use client'

import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 40,
    absent: 20,
  },
  {
    name: 'Tue',
    present: 30,
    absent: 18,
  },
  {
    name: 'Wed',
    present: 20,
    absent: 80,
  },
  {
    name: 'Thur',
    present: 80,
    absent: 90,
  },
  {
    name: 'Fri',
    present: 90,
    absent: 80,
  },

];

const AttendanceChart = () => {
  return (
    <div className='bg-white rounded-xl p-4 h-full'>
      <div className='flex items-center justify-between'>
        <h1 className='text-lg font-semibold'>Attendance</h1>
        <Image src="/moreDark.png" width={20} height={20} alt=''  />
      </div>
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={500}
                height={300}
                data={data}
                barSize={20}
            >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
                <XAxis dataKey="name" axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
                <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
                <Tooltip contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }} />
                <Legend align='left' verticalAlign='top' wrapperStyle={{ paddingTop: '20px', paddingBottom: "30px" }} />
                <Bar
                    dataKey="present"
                    fill="#8884d8"
                    legendType='circle'
                    radius={[10,10,0,0]}
                />
                <Bar
                    dataKey="absent"
                    fill="#82ca9d"
                    legendType='circle'
                    radius={[10,10,0,0]}
                />
            </BarChart>
        </ResponsiveContainer>
    </div>
  )
}

export default AttendanceChart
