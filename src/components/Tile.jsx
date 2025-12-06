import React from 'react'

export default function Tile({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-3 py-2 terminal-panel rounded shadow-neon-glow hover:scale-[1.01] transition-transform text-sm"
    >
      {children}
    </button>
  )
}