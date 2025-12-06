import React from 'react'

// Reusable modal panel (pure UI)
export default function Modal({ title, children, onClose }) {
  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="relative z-40 w-full max-w-2xl terminal-panel p-6 rounded-lg">
        <div className="flex items-start justify-between">
          <h2 className="text-lg font-bold">{title}</h2>
          {onClose ? (
            <button aria-label="Close" onClick={onClose} className="text-neon/60">
              ✕
            </button>
          ) : null}
        </div>
        <div className="mt-4 text-sm">{children}</div>
      </div>
    </div>
  )
}