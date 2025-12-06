import React from 'react'

// About panel with developer notes and safety constraints
export default function About() {
  return (
    <div className="terminal-panel p-4 rounded">
      <h4 className="font-bold">About</h4>
      <p className="text-sm text-neon/70 mt-2">
        Cinematic Hacking Demo. Educational and fictional. See README for developer notes and how to replace fake data.
      </p>
      <div className="text-xs mt-3 text-neon/60">
        <strong>Important:</strong> Do not use to deceive, phish, or attempt real tracking.
      </div>
    </div>
  )
}