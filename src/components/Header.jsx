import React from 'react'
import Disclaimer from './Disclaimer'

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-20">
      <Disclaimer />
      <div className="px-6 py-3 flex items-center justify-between bg-transparent">
        <h1 className="text-neon text-lg font-bold">Cinematic Hacking Demo (SIM)</h1>
        <div className="text-sm text-neon/70">Fictional — educational UI only</div>
      </div>
    </header>
  )
}