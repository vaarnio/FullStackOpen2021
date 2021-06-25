import React, { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let sum = good + neutral + bad

  if(sum > 0){
    return (
      <div>
        <GiveFeedback setGood={setGood} setNeutral={setNeutral} setBad={setBad} good={good} neutral={neutral} bad={bad}/>
        <Statistics good={good} neutral={neutral} bad={bad} sum={sum}/>
      </div>
    )
  } else {
    return (
      <div>
        <GiveFeedback setGood={setGood} setNeutral={setNeutral} setBad={setBad} good={good} neutral={neutral} bad={bad}/>
      </div>
    )
  }
}

const GiveFeedback = (props) => {
  return (
    <div>
      <h1>give feedback</h1>
      <Button setState={props.setGood} text='good' variable={props.good}/>
      <Button setState={props.setNeutral} text='neutral' variable={props.neutral}/>
      <Button setState={props.setBad} text='bad' variable={props.bad}/>
    </div>
  )
}

const Statistics = (props) => {
  let average = (props.good*1 + props.bad*(-1))/props.sum
  let positive = props.good/props.sum
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticsLine text='good' value={props.good}/>
          <StatisticsLine text='neutral' value={props.neutral}/>
          <StatisticsLine text='bad' value={props.bad}/>
          <StatisticsLine text='all' value={props.sum}/>
          <StatisticsLine text='average' value={average}/>
          <StatisticsLine text='positive' value={positive}/>
        </tbody>
      </table>
    </div>
  )
}

const StatisticsLine = (props) => {
  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Button = (props) => {
  return(
    <button onClick={() => props.setState(props.variable + 1)}>{props.text} </button>
  )
}

export default App