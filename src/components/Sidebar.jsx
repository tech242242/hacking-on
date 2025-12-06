import React from 'react'
import Tile from './Tile'

export default function Sidebar({ onSelect, onLogout }) {
  const items = [
    { key: 'trace', label: 'Trace Finder' },
    { key: 'ip', label: 'IP Visualizer (SIM)' },
    { key: 'packet', label: 'Packet Console (SIM)' },
    { key: 'exploit', label: 'Exploit Archive (UI only)' },
    { key: 'map', label: 'Network Map (SIM)' },
    { key: 'settings', label: 'Settings / About' }
  ]
  return (
    <div>
      <div className="mb-4">
        <div className="p-3 bg-black bg-opacity-50 rounded border border-green-900">
          <div className="text-sm">USER: demo (SIM)</div>
          <div className="text-xs text-green-200/70">MODE: cinematic</div>
        </div>
      </div>
      <nav className="space-y-2" aria-label="Main tools">
        {items.map(i => (
          <button
            key={i.key}
            onClick={() => onSelect(i.key)}
            className="w-full text-left p-3 bg-black bg-opacity-30 rounded border border-green-900 hover:bg-black/50"
          >
            {i.label}
          </button>
        ))}
      </nav>
    </div>
  )
}