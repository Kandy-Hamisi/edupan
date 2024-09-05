import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { parentsData, role, studentsData, teachersData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


type Parent = {
  id: number;
  name: string;
  phone: string;
  email?: string;
  address: string;
  students: string[];
}

const columns = [
  {
    header: "Info",
    accessor: "info",
    className: ""
  },
  {
    header: "Student Name",
    accessor: "students",
    className: "hidden md:table-cell"
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell"
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell"
  },
  {
    header: "Actions",
    accessor: "actions",
    className: ""
  },
]

const ParentsList = () => {

  const renderRow = (item: Parent) => {
    return (
      <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-eduPurpleLight'>
        <td className='flex items-center gap-4 p-4'>
          <div className="flex flex-col">
            <h3 className='font-semibold'>{item.name}</h3>
            <p className='text-xs text-gray-500'>{item?.email}</p>
          </div>
        </td>
        <td className='hidden md:table-cell'>{item.students.join(',')}</td>
        <td className='hidden md:table-cell'>{item.phone}</td>
        <td className='hidden md:table-cell'>{item.address}</td>
        <td>
          <div className='flex items-center gap-2'>
            <Link href={`/list/parents/${item.id}`} className='flex gap-2 items-center'>
              <button className='w-7 h-7 flex items-center justify-center rounded-full bg-eduSky'>
                <Image src="/view.png" alt='' width={16} height={16}/>
              </button>
              {
                role === "admin" && (
                  <button className='w-7 h-7 flex items-center justify-center rounded-full bg-eduPurple'>
                    <Image src="/delete.png" alt='' width={16} height={16}/>
                  </button>
                )
              }
            </Link>
          </div>
        </td>
      </tr>
    )
  }

  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
      {/* top */}
      <div className='flex items-center justify-between'>
        <h1 className='hidden md:block text-lg font-semibold'>All Parents</h1>
        <div className='flex flex-col md:flex-row items-center gap-4 w-full md:w-auto'>
            <TableSearch />
            <div className='flex items-center gap-4 self-end'>
                <button className='w-8 h-8 flex items-center justify-center rounded-full bg-eduYellow'>
                    <Image src="/filter.png" alt='' width={14} height={14} />
                </button>
                <button className='w-8 h-8 flex items-center justify-center rounded-full bg-eduYellow'>
                    <Image src="/sort.png" alt='' width={14} height={14} />
                </button>
                {role === "admin" && <button className='w-8 h-8 flex items-center justify-center rounded-full bg-eduYellow'>
                    <Image src="/plus.png" alt='' width={14} height={14} />
                </button>}
            </div>
        </div>
      </div>
      {/* list */}
      <div>
        <Table columns={columns} renderRow={renderRow} data={parentsData} />
      </div>
      {/* pagination */}
      <Pagination />
    </div>
  )
}

export default ParentsList
