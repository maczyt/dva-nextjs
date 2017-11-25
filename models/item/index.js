import _ from 'lodash'
import uniqueString from 'unique-string'
import history from '../../utils/history'
export default {
  
  namespace: 'item',

  state: {
    activeType: null,
    items: [],  
  },

  subscriptions: {
    setup() {
      return history.listen(props => {
        dispatch({
          type: 'test',
          payload: JSON.stringify(props)
        })
      })
    }
  },

  reducers: {

    add(state, { payload: title }) {
      return { ...state, items: [ { id: uniqueString(), title, completed: false }, ...state.items ] }
    },

    toggleItem(state, { payload : id }) {
      const items = state.items.slice();
      const item = items[_.findIndex(items, { id })]
      item.completed = !item.completed
      return {
        ...state, items
      }
    }
  }
}