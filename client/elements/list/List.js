import React from 'react'
import { NoContent } from '../no-content/NoContent'
import './List.sass'

/**
 * @param {import('./List').ListProps} props
 * @returns {*}
 * @constructor
 */
export const List = props => {
  return (
    <div
      className="vh-list"
    >
      {props.items.map(props.toItem)}
      {!props.items.length && (
        <NoContent
          label={props.noItemsLabel}
        />
      )}
    </div>
  )
}