import { useState } from "react"



 
// creamos un componente Button que recibe dos props: onClick y text
const Button = ({onClick,text}) => {
  return ( 
    <button onClick = {onClick}>
      {text}
    </button>
  )
}




const App = () => {
  // guardar los clics de cada boton en un estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const handleClickGood = () => {
    setGood(good + 1)
  }
  const handleClickNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleClickBad = () => {
    setBad(bad + 1)
  }

  return(
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleClickGood} text="good"/>
      <Button onClick={handleClickNeutral} text="neutral"/>
      <Button onClick={handleClickBad} text="bad"/>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )


}
export default App