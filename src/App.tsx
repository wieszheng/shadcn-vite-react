import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from "@/components/ui/button"
import { ThemeToggler } from "@/components/theme-toggler"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-sm border-b">
    <div className="container flex items-center justify-between py-2">
      <div className="flex items-center gap-0.5 -mr-2">
        <ThemeToggler />
      </div>
    </div>
    <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
  </div>

  )
}

export default App
