import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
}

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()
  const particlesRef = useRef<Particle[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
    }

    setCanvasSize()

    const particleCount = Math.min(60, Math.floor((window.innerWidth * window.innerHeight) / 15000))

    particlesRef.current = []
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push({
        x: Math.random() * canvas.width / (window.devicePixelRatio || 1),
        y: Math.random() * canvas.height / (window.devicePixelRatio || 1),
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.5,
      })
    }

    let mouseX = canvas.width / (window.devicePixelRatio || 1) / 2
    let mouseY = canvas.height / (window.devicePixelRatio || 1) / 2
    let isMouseMoving = false

    let mouseMoveTimeout: ReturnType<typeof setTimeout>
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      isMouseMoving = true

      clearTimeout(mouseMoveTimeout)
      mouseMoveTimeout = setTimeout(() => {
        isMouseMoving = false
      }, 1000)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    let resizeTimeout: ReturnType<typeof setTimeout>
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        setCanvasSize()
        particlesRef.current.forEach((particle) => {
          const maxX = canvas.width / (window.devicePixelRatio || 1)
          const maxY = canvas.height / (window.devicePixelRatio || 1)
          if (particle.x > maxX) particle.x = maxX
          if (particle.y > maxY) particle.y = maxY
        })
      }, 250)
    }

    window.addEventListener('resize', handleResize, { passive: true })

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1))

      const particles = particlesRef.current
      const maxX = canvas.width / (window.devicePixelRatio || 1)
      const maxY = canvas.height / (window.devicePixelRatio || 1)

      particles.forEach((particle, i) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > maxX) {
          particle.vx *= -0.8
          particle.x = Math.max(0, Math.min(maxX, particle.x))
        }
        if (particle.y < 0 || particle.y > maxY) {
          particle.vy *= -0.8
          particle.y = Math.max(0, Math.min(maxY, particle.y))
        }

        if (isMouseMoving) {
          const dx = mouseX - particle.x
          const dy = mouseY - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            const force = (120 - distance) / 120
            particle.vx += dx * 0.0001 * force
            particle.vy += dy * 0.0001 * force
          }
        }

        const maxVelocity = 2
        const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy)
        if (speed > maxVelocity) {
          particle.vx = (particle.vx / speed) * maxVelocity
          particle.vy = (particle.vy / speed) * maxVelocity
        }

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.15)'
        ctx.fill()

        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = otherParticle.x - particle.x
          const dy = otherParticle.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      clearTimeout(mouseMoveTimeout)
      clearTimeout(resizeTimeout)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  )
}
