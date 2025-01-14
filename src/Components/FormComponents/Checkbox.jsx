import React from 'react'



export const Checkbox = ({ label, ...props }) => {
  return (
    <div className="flex items-center mb-4">
      <input
        type="checkbox"
        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
        {...props}
      />
      <label className="ml-2 block text-sm text-gray-900" htmlFor={props.id}>
        {label}
      </label>
    </div>
  )
}

