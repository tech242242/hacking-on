import React, { useState, useEffect } from 'react'
import HeaderDisclaimer from './components/HeaderDisclaimer'
import ConsentModal from './components/ConsentModal'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import ParticleBackground from './components/ParticleBackground'
import './index.css'

// Root application
export default function App() {
  const [consent, setConsent] = useState(() => {
    // session storage is allowed for consent state only
    try {
      return sessionStorage.getItem('demo_consent') === 'true'
    } catch {
      return false
    }
  })
  const [authed, setAuthed] = useState(false)

  useEffect(() => {
    if (consent) {
      try { sessionStorage.setItem('demo_consent', 'true') } catch {}
    }
  }, [consent])

  return (
    <div className="min-h-screen relative text-green-100">
      <HeaderDisclaimer />
      <ParticleBackground />
      {!consent && <ConsentModal onAccept={() => setConsent(true)} />}
      <main className="relative z-20 min-h-screen p-6">
        {!authed ? (
          <Login onSuccess={() => setAuthed(true)} />
        ) : (
          <Dashboard onLogout={() => setAuthed(false)} />
        )}
      </main>
    </div>
  )
}