import { useState, useEffect } from 'react'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions)

  useEffect(() => {
    let rafId: number | undefined

    function handleResize() {
      if (rafId !== undefined) return
      rafId = requestAnimationFrame(() => {
        rafId = undefined
        setWindowDimensions(getWindowDimensions())
      })
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      if (rafId !== undefined) cancelAnimationFrame(rafId)
    }
  }, [])

  return windowDimensions
}