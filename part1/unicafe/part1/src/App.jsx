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
  if (all === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  else{
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
  }





const App = () => {
  // guardar los clics de cada boton en un estado
  const [metricas , setMetricas] = useState({
    all: 0,
    average: 0,
    positive: 0
  })
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  
  const handleClickGood = () => {
    const newGood = good + 1
    const newAll = metricas.all + 1
    const newAverage = newAll === 0 ? 0 : (newGood - bad) / newAll
    const newPositive = newAll === 0 ? 0 : (newGood / newAll) * 100

    setGood(newGood)
    setMetricas({
      all: newAll,
      average: newAverage,
      positive: newPositive
    })
  }
  const handleClickNeutral = () => {
    const newNeutral = neutral + 1
    const newAll = metricas.all + 1
    const newAverage = newAll === 0 ? 0 : (good - bad) / newAll
    const newPositive = newAll === 0 ? 0 : (good / newAll) * 100

    setNeutral(newNeutral)
    setMetricas({
      all: newAll,
      average: newAverage,
      positive: newPositive
    })
  }
  const handleClickBad = () => {
    const newBad = bad + 1
    const newAll = metricas.all + 1
    const newAverage = newAll === 0 ? 0 : (good - newBad) / newAll
    const newPositive = newAll === 0 ? 0 : (good / newAll) * 100

    setBad(newBad)
    setMetricas({
      all: newAll,
      average: newAverage,
      positive: newPositive
    })
  }
  

  return(
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleClickGood} text="good"/>
      <Button onClick={handleClickNeutral} text="neutral"/>
      <Button onClick={handleClickBad} text="bad"/>
      <Metricas good={good} neutral={neutral} bad={bad} all={metricas.all} average={metricas.average} positive={metricas.positive}/>
    </div>
  )


}
export default App