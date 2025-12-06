import React from 'react'

// SIMULATION ONLY - NO REAL TRACKING
export default function Settings() {
  return (
    <div>
      <h3 className="text-lg font-bold">Settings & About</h3>
      <div className="mt-3 terminal p-4">
        <p>This demo is intentionally fictional and local-only. It does not collect or transmit any data.</p>
        <ul className="mt-2 text-sm list-disc pl-5">
          <li>Demo login: muhammad_saqib_demo / demo242242</li>
          <li>All IPs are sample/test ranges (e.g., 192.0.2.x) and not traced to real endpoints.</li>
          <li>SIMULATION ONLY - NO REAL TRACKING</li>
        </ul>
      </div>
    </div>
  )
}