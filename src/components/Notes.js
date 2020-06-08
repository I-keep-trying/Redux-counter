import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleImportanceOf, addVote } from '../reducers/noteReducer'

const Note = ({ note, handleClick, handleVoteClick }) => {
  return (
    <li>
      {note.content} votes: {note.votes}
      <strong> {note.important ? 'important' : ''}</strong>
      <button onClick={handleClick}>toggle importance</button>
      <button onClick={handleVoteClick}>vote</button>
    </li>
  )
}

const Notes = () => {
  const dispatch = useDispatch()
  const notes = useSelector(state => state)
  console.log('Notes component notes: ', notes)
  return (
    <ul>
      {notes.map(note => (
        <Note
          key={note.id}
          note={note}
          handleClick={() => dispatch(toggleImportanceOf(note.id))}
          handleVoteClick={() => dispatch(addVote(note.votes))}
        />
      ))}
    </ul>
  )
}

export default Notes
