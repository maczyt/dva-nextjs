import _ from 'lodash'

export function fetchList(state) {
  const { activeType, items } = state.item
  if (activeType === 'active') {
    return _.filter(items, { 'completed': false })
  }
  if (activeType === 'completed') {
    return _.filter(items, { 'completed': true })
  }
  return items;
}

export function activeNums(state) {
  const { items } = state.item
  return _.filter(items, { 'completed': false }).length
}

export function fullCompleted(state) {
  const { items } = state.item
  return !items.some(item => !item.completed)
}