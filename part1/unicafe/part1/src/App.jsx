import { useState } from "react"



 
// creamos un componente Button que recibe dos props: onClick y text
const Button = ({onClick,text}) => {
  return ( 
    <button onClick = {onClick}>
      {text}
    </button>
  )
}

const Metricas = ({good, neutral, bad, all, average, positive}) => {
  return (
    <div>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
    </div>
  )
}




const App = () => {
  // guardar los clics de cada boton en un estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
  
  const handleClickGood = () => {
    const newGood = good + 1
    const newAll = all + 1
    const newAverage = newAll === 0 ? 0 : (newGood - bad) / newAll
    const newPositive = newAll === 0 ? 0 : (newGood / newAll) * 100

    setGood(newGood)
    setAll(newAll)
    setAverage(newAverage)
    setPositive(newPositive)
  }
  const handleClickNeutral = () => {
    const newNeutral = neutral + 1
    const newAll = all + 1
    const newAverage = newAll === 0 ? 0 : (good - bad) / newAll
    const newPositive = newAll === 0 ? 0 : (good / newAll) * 100

    setNeutral(newNeutral)
    setAll(newAll)
    setAverage(newAverage)
    setPositive(newPositive)
  }
  const handleClickBad = () => {
    const newBad = bad + 1
    const newAll = all + 1
    const newAverage = newAll === 0 ? 0 : (good - newBad) / newAll
    const newPositive = newAll === 0 ? 0 : (good / newAll) * 100

    setBad(newBad)
    setAll(newAll)
    setAverage(newAverage)
    setPositive(newPositive)
  }
  

  return(
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleClickGood} text="good"/>
      <Button onClick={handleClickNeutral} text="neutral"/>
      <Button onClick={handleClickBad} text="bad"/>
      <Metricas good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
    </div>
  )


}
export default App