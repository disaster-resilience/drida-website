import { useEffect, useRef, useState } from 'react'

// Animate a number from 0 → target once the element scrolls into view.
// Respects prefers-reduced-motion by snapping straight to the target.
export function useCountUp(target, { duration = 1600, decimals = 0 } = {}) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setValue(target)
      return
    }

    const run = () => {
      if (started.current) return
      started.current = true
      const start = performance.now()
      const tick = (now) => {
        const t = Math.min((now - start) / duration, 1)
        // easeOutExpo for a lively-then-settling feel
        const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
        setValue(target * eased)
        if (t < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && run()),
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [target, duration])

  const display =
    decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString()

  return { ref, display }
}
