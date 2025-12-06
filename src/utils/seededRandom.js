// SIMULATION ONLY - NO REAL TRACKING
// Simple seeded RNG (LCG) for deterministic fake data.

export default function seededRandom(seed = 1) {
  let _seed = seed >>> 0
  return function() {
    // constants from numerical recipes
    _seed = (_seed * 1664525 + 1013904223) >>> 0
    return _seed / 0x100000000
  }
}