import React from 'react'
import Link from 'next/link'
import classnames from 'classnames'
import { connect } from 'dva'
import { activeNums } from '../models/item/selectors'

const mapStateToProps = (state) => {
  return {
    activeType: state.item.activeType,
    itemLeft: activeNums(state),
  }
}

export default connect(mapStateToProps)(({ dispatch, activeType, itemLeft }) => {
  function changeFilter(filter) {
    dispatch({
      type: 'item/setActiveType',
      payload: filter,
    })
  }
  function deleteCompleted() {
    dispatch({ type: 'item/deleteCompleted' })
  }
  return (
    <footer className="footer">
      <span className="todo-count"><strong>{ itemLeft }</strong> { itemLeft === 1 ? 'item' : 'items' } left</span>
      <ul className="filters">
        <li>
          <a href="#/" className={classnames({ selected: !activeType || activeType === 'all' })} onClick={changeFilter.bind(this, 'all')}>All</a>
        </li>
        <li>
          <a href="#/active" className={classnames({ selected: activeType === 'active' })} onClick={changeFilter.bind(this, 'active')}>Active</a>
        </li>
        <li>
          <a href="#/completed" className={classnames({ selected: activeType === 'completed' })} onClick={changeFilter.bind(this, 'completed')}>Completed</a>
        </li>
      </ul>
      <button className="clear-completed" onClick={deleteCompleted}>Clear completed</button>
    </footer>
  )
})
