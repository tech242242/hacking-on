// SIMULATION ONLY - NO REAL TRACKING
// Deterministic fake hop data used by TraceFinder component.

import seededRandom from '../utils/seededRandom'
import { generateLocalSimIP } from '../utils/ipGenerator'

const seed = 424242
const rng = seededRandom(seed)

const sampleCountries = [
  'Freedonia', 'Ruritania', 'Elbonia', 'Genovia', 'Syldavia', 'Latveria', 'Zubrowka', 'SanEscobar'
]

function randomChoice(arr) {
  return arr[Math.floor(rng() * arr.length)]
}

export function generateFakeHops(count = 8) {
  const hops = []
  for (let i = 1; i <= count; i++) {
    // SIMULATION ONLY - fake, local-only IPs in TEST-NET range (192.0.2.x)
    const ip = generateLocalSimIP(rng)
    hops.push({
      hop: i,
      ip,
      rttMs: Math.floor(10 + rng() * 200),
      location: randomChoice(sampleCountries),
      note: rng() > 0.85 ? 'TTL expired (SIM)' : 'OK (SIM)',
      timestamp: new Date(Date.now() - (count - i) * 1000).toISOString()
    })
  }
  // final traced-to ip is 192.0.2.x (SIM)
  return hops
}