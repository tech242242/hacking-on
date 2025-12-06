import React from 'react'

export default function SpeedControl({ value, onChange }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <label className="text-neon/80">Speed</label>
      <input
        type="range"
        min="0.25"
        max="3"
        step="0.25"
        value={value}
        onChange={e => onChange(Number(e.target.value))}
        className="w-32"
        aria-label="animation speed"
      />
      <div className="text-neon/70 w-10 text-right">{value.toFixed(2)}x</div>
    </div>
  )
}