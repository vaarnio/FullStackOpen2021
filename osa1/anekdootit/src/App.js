import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(anecdotes.length))

  let mostPoints = points.indexOf(Math.max(...points));

  console.log(mostPoints)
  console.log(points)

  return (
    <div>
      <Anecdote anecdotes={anecdotes} points={points} index={selected} />
      <Button text='vote' action={() => setPoints(voteHandler(selected, points))}/>
      <Button text='next anecdote' action={() => setSelected(Math.floor(Math.random() * anecdotes.length))}/>
      <BestAnecdote anecdotes={anecdotes} points={points} best={mostPoints}/>
    </div>
  )
}

const BestAnecdote = (props) => {
  return(
    <div>
      <h1>Anecdote with most votes</h1>
      <Anecdote anecdotes={props.anecdotes} points={props.points} index={props.best} />
    </div>
  )
}

const Anecdote = (props) => {
  return(
    <div>
      {props.anecdotes[props.index]}
      <p>has {props.points[props.index]} votes</p>
    </div>
  )
}

const Button = (props) => {
  return(
    <button onClick={props.action}>{props.text}</button>
  )
}

const voteHandler = (selected, points) => {
  let copy = [...points]
  copy[selected] += 1
  return(copy)
}

export default App
