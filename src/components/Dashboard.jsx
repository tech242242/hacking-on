import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Tile from './Tile'
import TraceFinder from './TraceFinder'
import IPVisualizer from './IPVisualizer'
import PacketConsole from './PacketConsole'
import ExploitArchive from './ExploitArchive'
import NetworkMap from './NetworkMap'
import Settings from './Settings'
import PacketWaterfall from './PacketWaterfall'
import SnapshotButton from './SnapshotButton'

// Dashboard orchestrates tool panels. No data leaves the browser.
export default function Dashboard({ onLogout }) {
  const [active, setActive] = useState('trace')
  return (
    <div className="mt-12 grid grid-cols-12 gap-6">
      <aside className="col-span-3">
        <Sidebar onSelect={setActive} onLogout={onLogout} />
        <div className="mt-6">
          <Tile title="Packet Waterfall">
            <PacketWaterfall />
          </Tile>
        </div>
      </aside>
      <section className="col-span-9">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Cinematic Tools — {active.toUpperCase()}</h2>
          <div className="flex items-center gap-3">
            <SnapshotButton targetId="main-terminal" />
            <button
              onClick={() => {
                onLogout()
              }}
              className="px-3 py-1 bg-gray-800 rounded"
            >
              Logout
            </button>
          </div>
        </div>
        <div className="glass border border-green-900 p-4 rounded">
          {active === 'trace' && <TraceFinder />}
          {active === 'ip' && <IPVisualizer />}
          {active === 'packet' && <PacketConsole />}
          {active === 'exploit' && <ExploitArchive />}
          {active === 'map' && <NetworkMap />}
          {active === 'settings' && <Settings />}
        </div>
      </section>
    </div>
  )
}