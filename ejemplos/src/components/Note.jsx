const Note = ({ note, toggleImportance }) => {
  const label = note.important ? 
  'Make not important' : 'Make important'


  return (
    <li>
      {note.content}
      <button onClick={toggleImportance}>Toggle Importance</button>
    </li>
  )
}

export default Note
