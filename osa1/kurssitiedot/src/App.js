import React from 'react'

const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  let partselements = props.parts.map(part => <p key={part.name}>{part.name} {part.excercises}</p>)
  return(
    <div>
      {partselements}
    </div>
  )
}

const Total = (props) => {
  let sum = 0
  props.parts.forEach(part => {
    sum = sum + part.excercises
  })

  return(
    <p>Number of excercises {sum}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      excercises: 10
    },
    {
      name: 'Using props to pass data',
      excercises: 7
    },
    {
      name: 'State of a component',
      excercises: 14
    }
  ]

  return(
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

export default App;
