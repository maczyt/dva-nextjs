import React, { Component } from 'react'
import classnames from 'classnames'
import { connect } from 'dva'

class Item extends Component {

  constructor(props) {
    super(props)
    this.state = {
      editing: false,
      title: props.title,
    }
  }

  handleChange = (e) => {
    this.setState({
      title: e.target.value,
    })
  }

  handleChecke = (e) => {
    const { id, dispatch } = this.props;
    dispatch({
      type: 'item/toggle',
      payload: id
    })
  }

  handleDelete = (e) => {
    const { id, dispatch } = this.props;
    dispatch({
      type: 'item/delete',
      payload: id
    })
  }

  openEdit = (e) => {
    this.setState({
      editing: true,
    })
  }

  handleEdit = (e) => {
    const keyCode = e.keyCode
    console.log(keyCode)
    if (keyCode === 13) {
      // finish
      this.doneEdit(e)
    } else if (keyCode === 27) {
      // cancel
      this.cancelEdit()
    }
  }

  cancelEdit = () => {
    const { title } = this.props
    this.setState({
      editing: false,
      title,
    })
  }

  doneEdit = (e) => {
    const { id, dispatch } = this.props 
    const title = e.target.value.trim()
    dispatch({
      type: 'item/edit',
      payload: { id, title },
    })
    this.cancelEdit()
  }

  render() {
    const { title, completed } = this.props
    const { editing } = this.state
    return (
      <li className={classnames({ completed, editing })}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={completed} onChange={this.handleChecke} />
          <label onDoubleClick={this.openEdit}>{title}</label>
          <button className="destroy" onClick={this.handleDelete}></button>
        </div>
        <input className="edit" value={this.state.title} onBlur={this.cancelEdit} onKeyUp={this.handleEdit} onChange={this.handleChange} />
      </li>
    )
  }
}

export default connect()(Item)
