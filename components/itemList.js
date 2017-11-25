import React, { PureComponent } from 'react'
import { connect } from 'dva'
import Item from './item'
import { fetchList, fullCompleted } from '../models/item/selectors'

const mapStateToProps = (state) => {
  return {
    items: fetchList(state),
    fullCompleted: fullCompleted(state),
  }
}

@connect(mapStateToProps)
export default class extends PureComponent {
  toggleAll = () => {
    const { dispatch, fullCompleted } = this.props
    dispatch({ type: 'item/toggleAll', payload: !fullCompleted })
  }
  render() {
    const { items, fullCompleted } = this.props
    return (
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" onChange={this.toggleAll} checked={fullCompleted} />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {
            items.map((item, index) => {
              return <Item key={index} {...item} />
            })
          }
        </ul>
      </section>
    )
  }
}
