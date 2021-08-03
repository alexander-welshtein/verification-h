import React from 'react'
import { composeClass } from '../../helpers/Utilities'
import './ListItem.sass'

/**
 * @param {import('./ListItem').ListItemProps} props
 * @returns {*}
 * @constructor
 */
export const ListItem = props => {
  const className = composeClass(
    'vh-list-item'
  )

  return (
    <div
      className={className}
    >
      {props.value}
    </div>
  )
}