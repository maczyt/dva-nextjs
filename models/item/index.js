import _ from 'lodash'
import uniqueString from 'unique-string'
export default {
  
  namespace: 'item',

  state: {
    activeType: null,
    items: [],  
  },

  reducers: {

    add(state, { payload: title }) {
      return { ...state, items: [ { id: uniqueString(), title, completed: false }, ...state.items ] }
    },

    delete(state, { payload: id }) {
      const items = state.items.slice()
      _.remove(items, { id })
      return { ...state, items }
    },

    deleteCompleted(state) {
      const items = state.items.filter(item => !item.completed)
      return { ...state, items }
    },

    edit(state, { payload: { id, title } }) {
      const items = state.items.slice()
      const item = items[_.findIndex(items, { id })]
      item.title = title
      return { ...state, items }
    },

    toggle(state, { payload : id }) {
      const items = state.items.slice()
      const item = items[_.findIndex(items, { id })]
      item.completed = !item.completed
      return { ...state, items }
    },

    toggleAll(state, { payload: completed }) {
      const items = state.items.slice().map(item => 
        ({ ...item, completed })
      )
      return { ...state, items }
    },

    setActiveType(state, { payload: activeType }) {
      return { ...state, activeType }
    },

  }
}