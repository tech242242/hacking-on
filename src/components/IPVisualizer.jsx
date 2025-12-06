import React, { useState, useRef } from 'react'
import { sampleIPs } from '../data/fake-ips'
import { generateLocalSimIP } from '../utils/ipGenerator'

// SIMULATION ONLY - NO REAL TRACKING
// This component never queries the visitor's real IP. It uses sample or user input.

function SimpleWorldSVG({ pathCoords = [] }) {
  // Minimal stylized world map placeholder with ping path
  return (
    <svg viewBox="0 0 600 300" className="w-full h-64 bg-black/20 rounded">
      <rect width="100%" height="100%" fill="transparent" />
      {/* stylized continents (very simplified) */}
      <g fill="#062" opacity="0.6">
        <ellipse cx="150" cy="160" rx="90" ry="40" />
        <ellipse cx="320" cy="110" rx="140" ry="55" />
        <ellipse cx="470" cy="180" rx="80" ry="35" />
      </g>
      {/* path */}
      <polyline
        points={pathCoords.map(p => `${p[0]},${p[1]}`).join(' ')}
        stroke="#00ff7f"
        strokeWidth="2"
        fill="none"
        strokeDasharray="6"
      />
      {/* nodes */}
      {pathCoords.map((p, i) => (
        <circle cx={p[0]} cy={p[1]} r={4} fill="#00ff7f" key={i} />
      ))}
    </svg>
  )
}

export default function IPVisualizer() {
  const [ip, setIp] = useState(sampleIPs[0])
  const [path, setPath] = useState([])
  const animRef = useRef(null)

  function startPingSimulation(toIp) {
    // SIMULATION ONLY - generate fake path points
    const coords = [
      [40, 200],
      [120, 150],
      [240, 100],
      [360, 120],
      [460, 180]
    ].map(c => [c[0] + Math.random() * 40 - 20, c[1] + Math.random() * 20 - 10])
    setPath(coords)
    // animated ping (pulses)
    if (animRef.current) clearInterval(animRef.current)
    let idx = 0
    animRef.current = setInterval(() => {
      idx = (idx + 1) % coords.length
      setPath(p => p.map((pt, i) => pt))
    }, 600)
    setTimeout(() => {
      if (animRef.current) clearInterval(animRef.current)
    }, 4000)
  }

  return (
    <div>
      <div className="mb-3 flex items-center gap-3">
        <label className="text-sm">Simulate IP</label>
        <input
          aria-label="IP to visualize"
          value={ip}
          onChange={e => setIp(e.target.value)}
          className="p-2 bg-black bg-opacity-40 border border-green-800 rounded"
        />
        <button
          onClick={() => startPingSimulation(ip)}
          className="px-3 py-1 bg-neon-green text-black rounded"
        >
          Ping (SIM)
        </button>
        <button
          onClick={() => {
            const r = generateLocalSimIP()
            setIp(r)
            startPingSimulation(r)
          }}
          className="px-3 py-1 bg-gray-800 rounded"
        >
          Random (SIM)
        </button>
      </div>
      <SimpleWorldSVG pathCoords={path} />
      <div className="mt-3 terminal">
        <div>Note: This is a visualization using sample IPs. No network queries are performed.</div>
      </div>
    </div>
  )
}