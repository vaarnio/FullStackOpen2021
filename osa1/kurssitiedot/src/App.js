import React from 'react'

const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}

/* const Part = (props) => {
  return(
      <p>{props.part} {props.excercises}</p>
  )
} */

const Content = (props) => {
  return(
    <div>
      <p>{props.part1.name} {props.part1.excercises}</p>
      <p>{props.part2.name} {props.part2.excercises}</p>
      <p>{props.part3.name} {props.part3.excercises}</p>
    </div>
  )
}

const Total = (props) => {
  return(
    <p>Number of excercises {props.part1.excercises + props.part2.excercises + props.part3.excercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    excercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    excercises: 7
  }
  const part3 = {
    name: 'State of a component',
    excercises: 14
  }

  return(
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3}/>
      <Total part1={part1} part2={part2} part3={part3}/>
    </div>
  )
}

export default App;
