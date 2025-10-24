import { useState } from 'react'
import './App.css'

function App() {
  const [showPassword, setShowPassword] = useState(true);

  function switchShow() {
    if (!showPassword) {
      setShowPassword(true)
    }
    else {
      setShowPassword(false)
    }
  }

  return (
    <div className={"input-container"}>
      <h1>
        Hello, welcome to my website
      </h1>

      <div className={"form-container"}>
        <div className={"inputs"}>
          <input
            placeholder={"Login"}
          />
          <input
            type={
              showPassword
                ? "text"
                : "password"
            }
            placeholder="password"
          />
        </div>
        <button
          onClick={switchShow}
        >Show</button>

      </div>
      <div className={"button-container"}>
        <button>Login</button>
        <button>Sign up</button>
      </div>
    </div>
  )
}

export default App
