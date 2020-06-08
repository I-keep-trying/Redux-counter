const noteReducer = (state = [], action) => {
  //console.log('action', action)
  switch (action.type) {
    case 'NEW_NOTE':
      return [...state, action.data]
    case 'TOGGLE_IMPORTANCE': {
      console.log('TOGGLE_IMPORTANCE action', action)
      /* 
       {type: "TOGGLE_IMPORTANCE", data: {…}}
      data:
      id: 854145
      __proto__: Object
      type: "TOGGLE_IMPORTANCE"
      __proto__: Object */
      const id = action.data.id
      const noteToChange = state.find(n => n.id === id)
      console.log('TOGGLE_IMPORTANCE state', state)
      console.log('TOGGLE_IMPORTANCE noteToChange', noteToChange)
      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important,
      }
      return state.map(note => (note.id !== id ? note : changedNote))
    }
    case 'ADD_VOTE': {
      console.log('ADD_VOTE action', action)

      console.log('ADD_VOTE state', state)
const mapState = state.map(note => (note.id === state.id))
console.log('mapState', mapState)
      /*       const increment = {
        ...noteToChange,
        votes: noteToChange.votes + 1,
      }
      return state.map(note => (note.id !== id ? note : increment)) */
      return state
    }
    default:
      return state
  }
}

const generateId = () => Number((Math.random() * 1000000).toFixed(0))

/* export const createNote = content => {
  return {
    type: 'NEW_NOTE',
    data: {
      content,
      important: false,
      id: generateId(),
    },
  }
} */

export const createNote = content => {
  return {
    type: 'NEW_NOTE',
    data: {
      content,
      important: false,
      id: generateId(),
      votes: 1,
    },
  }
}

export const toggleImportanceOf = id => {
  return {
    type: 'TOGGLE_IMPORTANCE',
    data: { id },
  }
}

export const addVote = (id) => {
  console.log('addVote const data', id)
  return {
    type: 'ADD_VOTE',
    data: { id },
  }
}

export default noteReducer
