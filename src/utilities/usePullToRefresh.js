import { useEffect,useRef,useState } from 'react'

export const  usePullToRefresh = () => {
  const [startPoint, setStartPoint] = useState(0)
  const [pullChange, setPullChange] = useState(0)
  const spinnerContainerRef =  useRef(null)

  useEffect(() => {
    window.addEventListener("touchstart", pullStart)
    window.addEventListener("touchmove", pull)
    window.addEventListener("touchend", pullEnd)

    return () => {
      window.removeEventListener("touchstart", pullStart)
      window.removeEventListener("touchmove", pull)
      window.removeEventListener("touchend", pullEnd)
    }
  })

  const pullStart = (e) => {
    const {screenY} =  e.targetTouches[0]
    setStartPoint(screenY)
  }

  const pull = (e) => {
    const {screenY} =  e.targetTouches[0]
    const pullLength = startPoint < screenY ? Math.abs(screenY - startPoint) : 0
    setPullChange(pullLength)
  }

  const pullEnd = () => {
    setStartPoint(0)
    setPullChange(0)
    if(pullChange > 220) iniLoading()
  }

  const iniLoading = () => {
    spinnerContainerRef.current.classList.add("animate-spin")
    spinnerContainerRef.current.classList.remove("spinnerYAxis")
    setTimeout(() => {
    spinnerContainerRef.current.classList.remove("animate-spin")
    spinnerContainerRef.current.classList.add("spinnerYAxis")
      window.location.reload()
    }, 5000);
  }

  return {pullChange, spinnerContainerRef}
}