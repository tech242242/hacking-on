import React from 'react'

// SIMULATION ONLY - NO REAL TRACKING
// Consent must be given before using the simulated tools.
export default function ConsentModal({ onAccept }) {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-70">
      <div className="w-full max-w-2xl p-6 glass border border-green-900 rounded-lg text-white">
        <h2 className="text-2xl font-bold">Local Simulation Consent</h2>
        <p className="mt-4">
          This demo is a local, fictional simulation. It does not contact any servers for IP, geolocation, or analytics.
          Nothing you type is sent anywhere. Click below to confirm you understand and wish to proceed.
        </p>
        <ul className="mt-3 list-disc pl-5 text-sm">
          <li>This is a demo: no real tracking or collection.</li>
          <li>Do not paste real credentials or private keys here.</li>
          <li>For privacy, the app never calls external IP/geolocation services.</li>
        </ul>
        <div className="mt-6 flex gap-3 justify-end">
          <button
            className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700"
            onClick={() => {
              // If user wants, they can dismiss without consenting but will not proceed
              alert('You must accept to proceed to the demo tools.')
            }}
          >
            Cancel
          </button>
          <button
            aria-label="I understand — continue"
            className="px-4 py-2 bg-neon-green text-black font-bold rounded hover:opacity-90"
            onClick={onAccept}
          >
            I understand — continue
          </button>
        </div>
      </div>
    </div>
  )
}