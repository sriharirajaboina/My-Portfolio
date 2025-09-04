import { useEffect, useState } from 'react'
import './CursorFollower.css'

function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = (e) => {
      if (e.target.matches('a, button, .clickable, input, textarea')) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = (e) => {
      if (e.target.matches('a, button, .clickable, input, textarea')) {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter, true)
    document.addEventListener('mouseleave', handleMouseLeave, true)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter, true)
      document.removeEventListener('mouseleave', handleMouseLeave, true)
    }
  }, [])

  return (
    <>
      <div 
        className={`cursor-dot ${isHovering ? 'hovering' : ''}`}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />
      <div 
        className={`cursor-ring ${isHovering ? 'hovering' : ''}`}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />
    </>
  )
}

export default CursorFollower