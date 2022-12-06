import { useEffect,useState } from 'react'

export const  usePullToRefresh = () => {
  const [startPoint, setStartPoint] = useState(0)
  const [pullChange, setPullChange] = useState(0)

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

  const pullEnd = (e) => {
    setStartPoint(0)
    setPullChange(0)
    if(pullChange > 220) iniLoading()
  }

  const iniLoading = () => {
    setTimeout(() => {
      window.location.reload()
    }, 1000);
  }

  return pullChange
}