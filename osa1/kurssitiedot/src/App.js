import React from 'react'

const Header = (props) => {
  return(
    <h1>{props.course.name}</h1>
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
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return(
    <div>
      <Header course={course} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App;
