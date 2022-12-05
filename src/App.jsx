import './App.css'
import { useEffect, useRef,useState } from 'react'


function App() {
  const [startPoint, setStartPoint] = useState(0)
  const [pullChange, setPullChange] = useState(0)
  const refreshContainerRef = useRef(null)

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
    console.log("Pull start")
    refreshContainerRef.current.classList.add("rotate-spinner")
    const {screenY} =  e.targetTouches[0]
    console.log(screenY)
    setStartPoint(screenY)
  }

  const pull = (e) => {
    console.log("Pulling...")
    const {screenY} =  e.targetTouches[0]
    const pullLength = startPoint < screenY ? Math.abs(screenY - startPoint) : 0
    setPullChange(pullLength)
    console.log({screenY, startPoint, pullLength, pullChange})
  }

  const pullEnd = (e) => {
    console.log("Pull end")
    setStartPoint(0)
    setPullChange(0)
    refreshContainerRef.current.classList.add("loading")
    if(pullChange > 220) iniLoading()
  }

  const iniLoading = () => {
    console.log(refreshContainerRef.current)
    setTimeout(() => {
      console.log(window.location)
      window.location.reload()
    }, 1000);
  }

  return (
    <div className="App bg-green-300 h-full w-full grid place-content-center relative">
      <div className="grid place-content-center absolute inset-x-0 -top-10" ref={refreshContainerRef} style={{marginTop: pullChange / 3 || ""}}>
        <div className="">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" style={{transform: `rotate(${pullChange}deg)`}}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
        </div>
      </div>
      <div>
        <h5>Pull down to refresh</h5>
      </div>
    </div>
  )
}

export default App


{/* <div className="body flex justify-center items-center min-h-screen">
<header className="flex flex-col text-center">
<h1 className="text-4xl font-bold">Welcome to my app!</h1>
<p>Pull down to refresh</p>
</header>
</div> */}