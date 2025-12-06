import React, { useState } from 'react'

// SIMULATION ONLY - NO REAL TRACKING
// Demo credentials are constants used only for client-side success animation.
// DO NOT store or transmit the entered credentials anywhere.
const DEMO_USER = 'muhammad_saqib_demo'
const DEMO_PASS = 'demo242242'

export default function Login({ onSuccess }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    // Simulate check and animation delay
    setTimeout(() => {
      // immediate discard of the inputs; no storage or sending
      const ok = username === DEMO_USER && password === DEMO_PASS
      setUsername('')
      setPassword('')
      setLoading(false)
      if (ok) {
        onSuccess()
      } else {
        setError('Invalid demo credentials (SIM). Try username: muhammad_saqib_demo')
      }
    }, 900)
  }

  return (
    <div className="max-w-3xl mx-auto mt-24">
      <div className="glass border border-green-900 rounded-lg p-6 flex gap-6 items-center">
        <div className="flex-1">
          <h1 className="text-3xl font-bold">Cinematic Net-Sim — DEMO</h1>
          <p className="mt-2 text-sm text-green-200/80">
            Enter the demo credentials to unlock the terminal-style dashboard. This is a local simulation only.
          </p>
          <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
            <label className="block">
              <span className="text-sm">Username</span>
              <input
                aria-label="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full mt-1 p-3 bg-black bg-opacity-40 border border-green-800 rounded text-green-100"
              />
            </label>
            <label className="block">
              <span className="text-sm">Password</span>
              <input
                aria-label="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-1 p-3 bg-black bg-opacity-40 border border-green-800 rounded text-green-100"
              />
            </label>
            <div className="md:col-span-2 flex items-center gap-3 mt-2">
              <button
                type="submit"
                className="px-4 py-2 bg-neon-green text-black font-bold rounded hover:opacity-90"
                disabled={loading}
              >
                {loading ? 'Checking...' : 'Simulated Login'}
              </button>
              <div className="text-sm text-red-400">{error}</div>
            </div>
          </form>
        </div>
        <div className="w-64 terminal hidden md:block">
          <div className="text-xs">Welcome, visitor (SIM)</div>
          <div className="mt-3 text-sm">
            Simulated console output:
            <pre className="mt-2 text-xs">
{`> booting cinematic-net-sim...
> loading particle grid...
> ready. Press login to enter the simulation.`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}