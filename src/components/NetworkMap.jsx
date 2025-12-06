import React from 'react'

// SIMULATION ONLY - NO REAL TRACKING
export default function NetworkMap() {
  return (
    <div>
      <h3 className="font-bold">Network Map (SIM)</h3>
      <div className="mt-3 terminal p-4">
        <div className="text-xs">[SIM] Map nodes:</div>
        <pre className="text-xs mt-2">
{`- demo-gateway (198.51.100.7)  -- connected
- demo-node-1 (192.0.2.12)    -- connected
- sandbox-33 (203.0.113.33)  -- connected`}
        </pre>
      </div>
    </div>
  )
}