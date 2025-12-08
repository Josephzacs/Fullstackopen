import DeletePerson from "./deletePerson"
const showPersons = ({ persons , filter , setPersons }) => {
  const personsToShow = filter === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map(person =>
          <li key={person.id}>{person.name} {person.number} <DeletePerson personId={person.id.toString()} setPersons={setPersons} /></li>
        )}
      </ul>
    </div>
  )
}

export default showPersons
