import React, { useEffect, useState } from 'react'

// Bonus UI: fake packet waterfall visualization.
// SIMULATION ONLY - purely local visuals.

export default function PacketWaterfall() {
  const [levels, setLevels] = useState(new Array(30).fill(0))

  useEffect(() => {
    const id = setInterval(() => {
      setLevels(l => l.map(() => Math.random()))
    }, 300)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="w-full h-36 bg-black bg-opacity-30 rounded p-2">
      <div className="flex items-end h-full gap-1">
        {levels.map((v, i) => (
          <div
            key={i}
            style={{ height: `${10 + v * 120}px`, transition: 'height 250ms linear' }}
            className="w-2 bg-gradient-to-t from-neon-green to-transparent rounded"
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  )
}