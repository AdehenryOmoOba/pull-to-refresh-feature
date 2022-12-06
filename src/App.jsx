import './App.css'
import { usePullToRefresh } from './utilities/usePullToRefresh'

function App() {
  
  const pullChange = usePullToRefresh()
  
  return (
    <div className="App bg-green-300 h-full w-full grid place-content-center relative">
      <div className="grid place-content-center absolute inset-x-0 -top-10" style={{marginTop: pullChange / 3 || ""}}>
        <div className="">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" style={{transform: `rotate(${pullChange}deg)`}}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
        </div>
      </div>
      <div>
        <h5>Pull down to refresh!</h5>
      </div>
    </div>
  )
}

export default App