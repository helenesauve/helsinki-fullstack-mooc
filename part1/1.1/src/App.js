
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = ({name, exercises}) => {
  return (
    <div>
      {name} {exercises}
    </div>
  )
}

const Content = ({parts}) => (
<div>
  {parts.map(({name, exercises}, index) => (
      <Part key={index} name={name} exercises={exercises}/>
  ))}
 </div>
);

  

const Total = ({parts}) => {
  
const totalNumber = parts.reduce(
  (sum, {exercises}) => sum + exercises, 0
);
  return (
    <div>
      <p>Number of exercises {totalNumber}</p>
    </div>
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

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App;