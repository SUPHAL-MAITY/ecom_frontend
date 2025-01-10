
import { useState } from 'react'
import SidebarForAdmin from '../../Components/SidebarForAdmin/SidebarForAdmin'


export default function RecentOrders() {
  const [searchQuery, setSearchQuery] = useState('')

  const orders = [
    { id: '#XGY-346', created: '7 min ago', customer: 'Albert Flores', total: '$630.00', profit: '$86.70', status: 'Pending' },
    { id: '#YHD-047', created: '52 min ago', customer: 'Jenny Wilson', total: '$25.00', profit: '$4.20', status: 'Confirmed' },
    { id: '#SRR-678', created: '1 hour ago', customer: 'Robert Fox', total: '$1,630.00', profit: '$203.90', status: 'Pending' },
    { id: '#PXF-534', created: '3 hour ago', customer: 'Cody Fisher', total: '$119.00', profit: '$12.00', status: 'Shipped' },
    { id: '#XGD-249', created: '2 day ago', customer: 'Arlene McCoy', total: '$660.00', profit: '$52.26', status: 'Shipped' },
    { id: '#SKP-035', created: '2 day ago', customer: 'Eleanor Pena', total: '$290.00', profit: '$29.00', status: 'Rejected' },
    { id: '#SKP-567', created: '7 min ago', customer: 'Dan Wilson', total: '$590.00', profit: '$50.00', status: 'Shipped' },
  ]

  return (
    <>   

  
   <div className="flex min-h-screen items-stretch">
    <div className="h-full">
        <SidebarForAdmin/>

    </div>
   

    <div className="flex-1 overflow-x-auto">

    <div className="p-6 ">
            
            <div className="mb-8">
            <h1 className="text-xl font-semibold text-gray-900">Product Orders</h1>
            <p className="text-sm text-gray-500">Avg. 57 orders per day</p>
            </div>
    
            <div className="flex justify-between items-center mb-6">
            <div className="flex gap-4">
                <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Category</span>
                <select className="border rounded-md px-3 py-1.5 text-sm">
                    <option>Show All</option>
                    <option>Pending</option>
                    <option>Rejected</option>
                    <option>Shipped</option>
                    <option>Confirmed</option>

                </select>
                </div>
                <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Status</span>
                <select className="border rounded-md px-3 py-1.5 text-sm">
                    <option>Show All</option>
                    <option>Pending</option>
                    <option>Rejected</option>
                    <option>Shipped</option>
                    <option>Confirmed</option>
                </select>
                </div>
            </div>
    
            <div className="relative">
                <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border rounded-lg text-sm"
                />
                <svg
                className="absolute left-3 top-2.5 h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
                </svg>
            </div>
            </div>
    
            <div className="overflow-x-auto ">
            <table className="w-full">
                <thead>
                <tr className="border-b bg-gray-200">
                    <th className="text-left py-4 px-4 text-sm font-medium text-gray-500">ORDER ID</th>
                    <th className="text-left py-4 px-4 text-sm font-medium text-gray-500">CREATED</th>
                    <th className="text-left py-4 px-4 text-sm font-medium text-gray-500">CUSTOMER</th>
                    <th className="text-left py-4 px-4 text-sm font-medium text-gray-500">TOTAL</th>
                    <th className="text-left py-4 px-4 text-sm font-medium text-gray-500">PROFIT</th>
                    <th className="text-left py-4 px-4 text-sm font-medium text-gray-500">STATUS</th>
                    <th className="w-10"></th>
                </tr>
                </thead>
                <tbody>
                {orders.map((order,i) => (
                    <tr key={order.id} className= {`border-b ${ i%2 !==0 ? "bg-gray-50" : "bg-white-100" } `}>
                    <td className="py-4 px-4 text-sm font-medium text-gray-900">{order.id}</td>
                    <td className="py-4 px-4 text-sm text-gray-500">{order.created}</td>
                    <td className="py-4 px-4 text-sm text-gray-900">{order.customer}</td>
                    <td className="py-4 px-4 text-sm text-gray-900">{order.total}</td>
                    <td className="py-4 px-4 text-sm text-gray-900">{order.profit}</td>
                    <td className="py-4 px-4">
                        <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                            ${order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : ''}
                            ${order.status === 'Confirmed' ? 'bg-blue-100 text-blue-800' : ''}
                            ${order.status === 'Shipped' ? 'bg-green-100 text-green-800' : ''}
                            ${order.status === 'Rejected' ? 'bg-red-100 text-red-800' : ''}
                        `}
                        >
                        {order.status}
                        </span>
                    </td>
                    <td className="py-4 px-4">
                        <button className="text-gray-400 hover:text-gray-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        </button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
    </div>



    </div>
   




   </div>

   



   
    
    
    
    </>
  
  )
}