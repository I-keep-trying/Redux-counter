import React from 'react'
import NewNote from './components/NewNote'
import Notes from './components/Notes'

function App() {
  /*   const dispatch = useDispatch()
  const notes = useSelector(state => state)
  const importantNotes = useSelector(state =>
    state.filter(note => note.important)
  ) */

  /*   const addNote = event => {
    event.preventDefault()
    const content = event.target.note.value
    event.target.note.value = ''
    dispatch(createNote(content))
  } */

  /*   const toggleImportance = id => {
    dispatch(toggleImportanceOf(id))
  } */

  return (
    <div>
      {/*       <form onSubmit={addNote}>
        <input name="note" />
        <button type="submit">add</button>
      </form> */}
      <NewNote />
      <Notes />
      {/* <ul>
        {notes.map(note => (
          <li key={note.id} onClick={() => toggleImportance(note.id)}>
            {note.content} <strong>{note.important ? 'important' : ''}</strong>
          </li>
        ))}
      </ul> */}
    </div>
  )
}

export default App
