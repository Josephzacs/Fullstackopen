import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'
import noteServices from './services/notes'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState('Some error happened...')



  useEffect(() => {
    noteServices
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])

  console.log('render', notes.length, 'notes')

  const addNote = (event) =>{
    event.preventDefault()
    console.log('button clicked', event.target)
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
    }

    noteServices
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
  })

  }
  
  const toggleImportanceOf = (id) => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }
    console.log('importance of' + id + 'needs to be toggled')

    noteServices
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
      .catch(error => {
        setErrorMessage(
          `the note '${note.content}' was already deleted from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setNotes(notes.filter(n => n.id !== id))
      })
  }

  const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
    return (
      <div className="error">
        {message}
      </div>
    )
  }

  const Footer = () => {
    const footerStyle = {
      color: 'green',
      fontStyle: 'italic',
      fontSize: 16
    }
    return (
      <div style={footerStyle}>
        <br /> 
        <em>Note app, Department of Computer Science, University of Helsinki 2024</em>
      </div>
    )
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important)
  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          Show {showAll ? 'Important' : 'All'}
        </button> 
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">Save</button>
      </form>
      <Footer />
    </div>
  )
}

export default App
