import React, { useState } from 'react'

// SIMULATION ONLY - NO REAL TRACKING
// Downloads a PNG snapshot of terminal content client-side by creating an SVG snapshot and converting to canvas.

function downloadDataUrl(filename, dataUrl) {
  const a = document.createElement('a')
  a.href = dataUrl
  a.download = filename
  a.click()
}

export default function SnapshotButton({ targetId = 'main-terminal' }) {
  const [busy, setBusy] = useState(false)

  async function makeSnapshot() {
    setBusy(true)
    try {
      const el = document.getElementById(targetId)
      if (!el) {
        alert('No terminal found to snapshot (SIM).')
        setBusy(false)
        return
      }
      // Collect text content to render in SVG (sanitized)
      const lines = Array.from(el.querySelectorAll('pre, div')).map(d => d.textContent).slice(0, 60)
      const text = lines.join('\n')
      // Create SVG
      const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='600'>
        <rect width='100%' height='100%' fill='#030405'/>
        <style>
          .mono { font-family: monospace; fill: #00ff7f; font-size:14px; white-space: pre; }
        </style>
        <text x='24' y='40' class='mono'>${escapeXml(text)}</text>
      </svg>`
      // convert to image
      const svgBlob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' })
      const url = URL.createObjectURL(svgBlob)
      const img = new Image()
      img.onload = () => {
        const canvas = document.createElement('canvas')
        canvas.width = 1200
        canvas.height = 600
        const ctx = canvas.getContext('2d')
        ctx.fillStyle = '#030405'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(img, 0, 0)
        URL.revokeObjectURL(url)
        const png = canvas.toDataURL('image/png')
        downloadDataUrl('terminal-snapshot.png', png)
        setBusy(false)
      }
      img.src = url
    } catch (err) {
      console.error(err)
      setBusy(false)
      alert('Snapshot failed (SIM).')
    }
  }

  function escapeXml(unsafe) {
    return (unsafe || '').replace(/[&<>"']/g, function (c) {
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;', "'":'&apos;'}[c]
    })
  }

  return (
    <button onClick={makeSnapshot} className="px-3 py-1 bg-gray-800 rounded" aria-label="Download terminal snapshot">
      {busy ? 'Rendering...' : 'Download Frame'}
    </button>
  )
}