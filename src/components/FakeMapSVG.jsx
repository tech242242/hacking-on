import React from 'react'

// A very simple SVG world-like canvas with animated ping path (SIMULATION ONLY - NO REAL TRACKING)
export default function FakeMapSVG({ path = [], animating }) {
  return (
    <div className="w-full h-64 bg-black/30 rounded p-2">
      <svg viewBox="0 0 200 100" className="w-full h-full">
        <rect x="0" y="0" width="200" height="100" fill="#020202" rx="4" />
        {/* simple fake land shapes */}
        <g fill="#052" opacity="0.6">
          <ellipse cx="40" cy="50" rx="25" ry="12" />
          <ellipse cx="110" cy="30" rx="40" ry="8" />
          <ellipse cx="160" cy="70" rx="25" ry="10" />
        </g>

        {/* path dots */}
        {path.map((p, i) => (
          <g key={p.id} transform={`translate(${(p.lon + 180) / 3.6}, ${100 - (p.lat + 90) / 1.8})`}>
            <circle r={animating ? 2 + (i % 2) * 1.5 : 2} fill="#00ff99" opacity={0.9 - i * 0.12} />
            <text x="3" y="-3" fontSize="3.5" fill="#00ff99" opacity={0.8}>
              {p.ip}
            </text>
          </g>
        ))}

        {/* animated line if path exists */}
        {path.length > 1 && (
          <polyline
            points={path.map((p, i) => `${(p.lon + 180) / 3.6},${100 - (p.lat + 90) / 1.8}`).join(' ')}
            fill="none"
            stroke="#00ff99"
            strokeWidth="0.5"
            strokeDasharray={animating ? '2,2' : '1,0'}
            opacity="0.7"
          />
        )}
      </svg>
    </div>
  )
}