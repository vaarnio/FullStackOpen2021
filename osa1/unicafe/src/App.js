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
        <Statistics good={good} neutral={neutral} bad={bad}/>
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
      <button onClick={() => props.setGood(props.good + 1)}>good</button>
      <button onClick={() => props.setNeutral(props.neutral + 1)}>neutral</button>
      <button onClick={() => props.setBad(props.bad + 1)}>bad</button>
    </div>
  )
}

const Statistics = (props) => {
  let sum = props.good + props.neutral + props.bad
  let average = (props.good*1 + props.bad*(-1))/sum
  let positive = props.good/sum
  return (
    <div>
      <h1>statistics</h1>
      <p>good {props.good}<br></br>
      neutral {props.neutral}<br></br>
      bad {props.bad}<br></br>
      all {sum}<br></br>
      average {average}<br></br>
      positive {positive*100} %</p>
    </div>
  )
}

export default App