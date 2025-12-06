import React, { useState } from 'react'
import { generateFakeHops } from '../data/fake-hops'
import Terminal from './Terminal'
import { generateLocalSimIP } from '../utils/ipGenerator'

// SIMULATION ONLY - NO REAL TRACKING

export default function TraceFinder() {
  const [running, setRunning] = useState(false)
  const [hops, setHops] = useState([])
  const [progress, setProgress] = useState(0)
  const [terminalLines, setTerminalLines] = useState([
    'Trace Finder (SIM). Press Start Trace to simulate hops.'
  ])

  function startTrace() {
    setRunning(true)
    setProgress(0)
    const fakeHops = generateFakeHops(6)
    setHops([])
    // simulate step-by-step
    fakeHops.forEach((hop, idx) => {
      setTimeout(() => {
        setHops(h => [...h, hop])
        setProgress(Math.round(((idx + 1) / fakeHops.length) * 100))
      }, 500 + idx * 700)
    })
    // final result
    setTimeout(() => {
      setTerminalLines(l => [...l, `TRACED TO: ${generateLocalSimIP()} (SIM)`])
      setRunning(false)
    }, 500 + fakeHops.length * 700 + 200)
  }

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-7">
        <div className="mb-3 flex gap-3">
          <button
            aria-label="Start Trace"
            onClick={startTrace}
            className="px-4 py-2 bg-neon-green text-black rounded disabled:opacity-60"
            disabled={running}
          >
            {running ? 'Tracing...' : 'Start Trace'}
          </button>
        </div>
        <div className="terminal">
          <div className="text-xs">Progress: {progress}%</div>
          <div className="mt-2 space-y-2">
            {hops.map(h => (
              <div key={h.hop} className="flex justify-between">
                <div>Hop {h.hop}: {h.ip}</div>
                <div className="text-xs text-green-200/70">{h.rttMs} ms — {h.location}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-5">
        <Terminal initialLines={terminalLines} />
      </div>
    </div>
  )
}