import React, { useState, useRef, useEffect } from 'react'

// SIMULATION ONLY - NO REAL TRACKING
// Terminal maps typed commands to scripted outputs and animates them.
// Commands are sanitized and only matched against known commands.

const COMMANDS = {
  'help': [
    'Available commands (SIM): help, scan --demo, trace --sim, clear',
  ],
  'scan --demo': [
    'Starting demo scan...',
    'Found 3 simulated hosts: demo-node-1 (192.0.2.12), sandbox-33 (203.0.113.33), demo-gateway (198.51.100.7)'
  ],
  'trace --sim': [
    'Tracing route to 192.0.2.77 (SIM)...',
    '1  10ms 192.0.2.1 (SIM)',
    '2  34ms 198.51.100.7 (SIM)',
    '3  87ms 203.0.113.33 (SIM)',
    '4  134ms 192.0.2.77 - TRACED TO (SIM)'
  ]
}

export default function Terminal({ initialLines = [], speed = 40, setSnapshotContent }) {
  const [lines, setLines] = useState(initialLines)
  const [cmd, setCmd] = useState('')
  const [animSpeed, setAnimSpeed] = useState(speed)
  const inputRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    // Expose text for snapshot
    if (setSnapshotContent) {
      setSnapshotContent(lines.join('\n'))
    }
  }, [lines, setSnapshotContent])

  function appendLine(text) {
    setLines(l => [...l, text])
  }

  function handleExecute(e) {
    e.preventDefault()
    const sanitized = (cmd || '').trim().toLowerCase().slice(0, 120)
    setCmd('')
    if (!sanitized) return
    appendLine(`> ${sanitized}`)
    if (sanitized === 'clear') {
      setLines([])
      return
    }
    const resp = COMMANDS[sanitized] || [`Command not found (SIM): ${sanitized}`]
    // streaming animation
    let i = 0
    function next() {
      if (i >= resp.length) return
      appendLine(resp[i])
      i++
      setTimeout(next, Math.max(10, animSpeed))
    }
    setTimeout(next, 100)
  }

  return (
    <div>
      <div id="main-terminal" ref={containerRef} className="terminal max-h-96 overflow-auto">
        {lines.length === 0 ? (
          <div className="text-sm text-green-200/60">Type 'help' to see demo commands (SIM)</div>
        ) : (
          lines.map((l, idx) => <pre className="text-xs" key={idx}>{l}</pre>)
        )}
      </div>
      <form onSubmit={handleExecute} className="mt-3 flex gap-2 items-center">
        <label className="sr-only">Terminal input</label>
        <input
          ref={inputRef}
          value={cmd}
          onChange={(e) => setCmd(e.target.value)}
          className="flex-1 p-2 bg-black bg-opacity-40 border border-green-800 rounded text-neon-green font-mono"
          aria-label="Terminal command input"
          placeholder="Enter command (e.g., help)"
        />
        <button type="submit" className="px-3 py-2 bg-neon-green text-black rounded">Run</button>
        <div className="ml-4 flex items-center gap-2">
          <label className="text-sm">Speed</label>
          <input
            aria-label="Animation speed"
            type="range"
            min="10"
            max="200"
            value={animSpeed}
            onChange={(e) => setAnimSpeed(Number(e.target.value))}
          />
        </div>
      </form>
    </div>
  )
}