import React from 'react'



export const Input = ({ label, ...props }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor={props.id}>
        {label}
      </label>
      <input
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        {...props}
      />
    </div>
  )
}

