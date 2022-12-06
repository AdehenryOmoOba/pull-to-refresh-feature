import './App.css'
import { usePullToRefresh } from './utilities/usePullToRefresh'


function App() {

  const {pullChange, spinnerContainerRef} = usePullToRefresh()

  const spinnerStyle = {
    marginRight: "-2px",
    display: "block",
    backgroundRepeatY: "initial",
    backgroundRepeatX: "initial",
    backgroundColor: "transparent",
    animationPlayState: "paused",
    transform: `rotate(${pullChange}deg)`
  }


  
  return (
    <div className="App bg-[#a6ffbd] h-full w-full grid place-content-center relative">
      <div className="grid place-content-center absolute inset-x-0 spinnerYAxis" style={{marginTop: pullChange / 3 || ""}} ref={spinnerContainerRef}>
          <svg xmlns="http://www.w3.org/2000/svg" width="131px" height="131px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style={spinnerStyle}>
          <g transform="matrix(1,0,0,1,0,0)" style={{transform: "matrix(1, 0, 0, 1, 0, 0)"}}>
          <path d="M50 40A10 10 0 1 0 56.73012513509773 42.6036890502139" fill="none" stroke="#e15b64" strokeWidth={4}></path>
          <path d="M49 35L49 45L54 40L49 35" fill="#e15b64"></path>
          </g>
          </svg>
      </div>
      <div>
        <h5>Pull down to refresh!</h5>
      </div>
    </div>
  )
}

export default App