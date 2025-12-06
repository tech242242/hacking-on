// SIMULATION ONLY - NO REAL TRACKING.
// Deterministic pseudo-random generator (simple) for reproducible fake IPs
export function seededRandom(seed) {
  let value = seed % 2147483647
  if (value <= 0) value += 2147483646
  return function () {
    value = (value * 16807) % 2147483647
    return (value - 1) / 2147483646
  }
}

// Generate fake IP in reserved TEST-NET range 192.0.2.x or 198.51.100.x or 203.0.113.x
export function generateFakeIp(seed = Date.now()) {
  const rnd = seededRandom(seed)()
  const ranges = [
    { base: '192.0.2.', max: 254 },
    { base: '198.51.100.', max: 254 },
    { base: '203.0.113.', max: 254 }
  ]
  const pick = Math.floor(rnd * ranges.length)
  const octet = 1 + Math.floor(seededRandom(seed + 1)() * ranges[pick].max)
  return `${ranges[pick].base}${octet}`
}