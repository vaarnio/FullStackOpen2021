import React from 'react'

const Course = ({name, parts}) => {
    return(
      <div>
        <Header content={name}/>
        <Content parts={parts}/>
        <Total parts={parts}/>
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
  
  const Total = ({parts}) => {
    const total = parts.reduce((sum, part) => sum += part.exercises, 0)
    return(
      <b>total of {total} exercises</b>
    )
  }
  
  const Part = ({name, exercises}) => {
    return(
      <div>
        <p>{name} {exercises}</p>
      </div>
    )
  }

export default Course