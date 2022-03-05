import { useState } from 'react'
import './main.css'

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center">
      <h1 className="font-bold text-2xl bg-blue-600">
        React and Tailwind with Vitejs! test
      </h1>
    </div>
  )
}

export default App
