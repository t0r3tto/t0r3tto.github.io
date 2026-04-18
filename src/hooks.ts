import { useState, useEffect, useRef, useCallback } from 'react'

export function useInterval(cb: () => void, ms: number | null) {
  const saved = useRef(cb)
  useEffect(() => { saved.current = cb }, [cb])
  useEffect(() => {
    if (ms == null) return
    const id = setInterval(() => saved.current(), ms)
    return () => clearInterval(id)
  }, [ms])
}

export function useTypewriter(
  text: string,
  { speed = 28, start = 0, loop = false } = {}
): string {
  const [i, setI] = useState(0)
  useEffect(() => {
    setI(0)
    const t0 = setTimeout(() => {
      const id = setInterval(() => {
        setI(prev => {
          if (prev >= text.length) {
            if (loop) return 0
            clearInterval(id)
            return prev
          }
          return prev + 1
        })
      }, speed)
      return () => clearInterval(id)
    }, start)
    return () => clearTimeout(t0)
  }, [text, speed, start, loop])
  return text.slice(0, i)
}

export function useDraggable(initial: { x: number; y: number }) {
  const [pos, setPos] = useState(initial)
  const ref = useRef<HTMLDivElement>(null)
  const startRef = useRef<{ mx: number; my: number; x: number; y: number } | null>(null)

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    const el = ref.current
    if (!el) return
    el.setPointerCapture(e.pointerId)
    startRef.current = { mx: e.clientX, my: e.clientY, x: pos.x, y: pos.y }
  }, [pos])

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!startRef.current) return
    const s = startRef.current
    const nx = Math.max(4, Math.min(window.innerWidth - 80, s.x + (e.clientX - s.mx)))
    const ny = Math.max(4, Math.min(window.innerHeight - 40, s.y + (e.clientY - s.my)))
    setPos({ x: nx, y: ny })
  }, [])

  const onPointerUp = useCallback(() => {
    startRef.current = null
  }, [])

  return { ref, pos, setPos, handlers: { onPointerDown, onPointerMove, onPointerUp } }
}

export function useInView(opts: IntersectionObserverInit = { threshold: 0.15 }) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); io.disconnect() }
    }, opts)
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return [ref, inView] as const
}

export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const h = () => {
      const y = window.scrollY + 180
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el) {
          const top = el.offsetTop
          const bot = top + el.offsetHeight
          if (y >= top && y < bot) { setActive(id); return }
        }
      }
    }
    h()
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [ids.join(',')])
  return active
}
