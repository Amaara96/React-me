import { useState } from 'react'

function App() {

  // let counter = 15

  const [counter, setCounter] = useState(0)

  // const addValue = () => {
  //   setCounter(counter + 1)
  // }

  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
  }
  
  // const removeValue = () => {
  //   setCounter(counter - 1)
  // }

  const removeValue = () => {
    setCounter((lastCounter) => lastCounter - 1)
    setCounter((lastCounter) => lastCounter - 1)
    setCounter((lastCounter) => lastCounter - 1)
  }
 
  return (
    <>
     <h1>React course with Amarachi {counter} </h1>
     <h2>Counter value :{counter}</h2>
     <button
     onClick={addValue}>Add value</button>
     <button 
     onClick={removeValue}>remove value</button> {" "}
     <p>footer: {counter} </p>
    </>
  )
}

export default App
