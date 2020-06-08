import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import noteReducer from './reducers/noteReducer'

const store = createStore(noteReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

/* 
//moved to reducers/noteReducer.js
const noteReducer = (state = [], action) => {
  if (action.type === 'NEW_NOTE') {
    return state.concat(action.data)
  }

  return state
} */

/* store.dispatch({
  type: 'NEW_NOTE',
  data: {
    content: 'the app state is in redux store',
    important: true,
    id: 1,
  },
})

store.dispatch({
  type: 'NEW_NOTE',
  data: {
    content: 'state changes are made with actions',
    important: false,
    id: 2,
  },
})

let state = store.getState()
console.log('state', state)

const generateId = () => Number((Math.random() * 1000000).toFixed(0)) */

/* const App = () => {
  const createNote = content => {
    return {
      type: 'NEW_NOTE',
      data: {
        content,
        important: false,
        id: generateId(),
      },
    }
  }

  const toggleImportanceOf = id => {
    return {
      type: 'TOGGLE_IMPORTANCE',
      data: { id },
    }
  }

  const addNote = event => {
    event.preventDefault()
    const content = event.target.note.value
    console.log('event.target.note', event.target.note.name)
    event.target.note.value = ''

    store.dispatch(createNote(content))
  }

  const toggleImportance = id => {
    store.dispatch(toggleImportanceOf(id))
  }

///////////////////////////////////////////////  
//without action creators 'createNote' and 'toggleImportanceOf'
const addNote = event => {
    event.preventDefault()
    const content = event.target.note.value
    console.log('event.target.note', event.target.note.name)
    event.target.note.value = ''
    
    store.dispatch({
      type: 'NEW_NOTE',
      data: {
        content,
        important: false,
        id: generateId(),
      },
    })
  }

  const toggleImportance = id => {
    store.dispatch({
      type: 'TOGGLE_IMPORTANCE',
      data: { id },
    })
  } 
//////////////////////////////////////////
  return (
    <div>
      <form onSubmit={addNote}>
        <input name="note" />
        <button type="submit">add</button>
      </form>
      <ul>
        {store.getState().map(note => (
          <li key={note.id} onClick={() => toggleImportance(note.id)}>
            {note.content} <strong>{note.important ? 'important' : ''}</strong>
          </li>
        ))}
      </ul>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp) */
