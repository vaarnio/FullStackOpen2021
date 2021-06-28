import React from 'react'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
      <Total parts={course.parts}/>
    </div>
  )
}

const Total = ({parts}) => {
  const total = parts.reduce((sum, part) => sum += part.exercises, 0)
  return(
    <p>total of {total}</p>
  )
}

const Course = ({course}) => {

  return(
    <div>
      <Header content={course.name}/>
      <Content parts={course.parts}/>
    </div>
  )
}

const Header = ({content}) => {
  return(
    <h1>{content}</h1>
  )
}

const Content = ({parts}) => {
  return(
    <div>
      {parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises}/>)}
    </div>
  )
}

const Part = ({name, exercises}) => {
  return(
    <div>
      <p>{name} {exercises}</p>
    </div>
  )
}

export default App;
