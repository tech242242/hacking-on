import React from 'react'
import Terminal from './Terminal'

// SIMULATION ONLY - NO REAL TRACKING

export default function PacketConsole() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <Terminal initialLines={['Packet Console (SIM): type "scan --demo" to see demo scan output']} />
      </div>
      <div className="terminal">
        <div className="text-sm">Packet Summary (SIM)</div>
        <ul className="text-xs mt-2">
          <li>UDP packets: 113 (SIM)</li>
          <li>TCP streams: 6 (SIM)</li>
          <li>Potential anomalies: 0 (SIM)</li>
        </ul>
      </div>
    </div>
  )
}