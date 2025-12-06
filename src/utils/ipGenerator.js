// SIMULATION ONLY - NO REAL TRACKING
// Utilities to make fake, local-only IP addresses (RFC 5737 TEST-NET ranges).

const TEST_RANGES = [
  { base: '192.0.2.', start: 1, end: 254 },
  { base: '198.51.100.', start: 1, end: 254 },
  { base: '203.0.113.', start: 1, end: 254 }
]

// rng should be a function that returns 0..1
export function generateLocalSimIP(rng = Math.random) {
  const range = TEST_RANGES[Math.floor(rng() * TEST_RANGES.length)]
  const last = Math.floor(range.start + rng() * (range.end - range.start + 1))
  return `${range.base}${last}`
}