const Course = ({ course }) => {
  return (
    <div>
        <h1>{course.name}</h1>
        <ul>
          {course.parts.map(part => (
            <li key={part.id}>
              {part.name} {part.exercises}
            </li>
          ))}
        </ul>
        <p>
          Total de ejercicios {course.parts.reduce((sum, part) => sum + part.exercises, 0)}
        </p>
    </div>
  )
}
export default Course