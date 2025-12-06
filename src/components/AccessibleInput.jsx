import React from 'react'

// Reusable accessible input with label
export default function AccessibleInput({ id, label, value, onChange, type = 'text', placeholder = '' }) {
  return (
    <label htmlFor={id} className="block">
      <span className="text-sm text-neon/80">{label}</span>
      <input
        id={id}
        value={value}
        onChange={e => onChange(e.target.value)}
        type={type}
        placeholder={placeholder}
        className="mt-1 w-full bg-transparent border border-neon/10 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neon"
      />
    </label>
  )
}