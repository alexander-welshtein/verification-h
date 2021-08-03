import React from 'react'
import './HeaderAsLabel.sass'

/**
 * @param {import('./HeaderAsLabel.d.ts').ColumnHeaderDefaultProps} props
 * @returns {*}
 * @constructor
 */
export const HeaderAsLabel = props => {
  return (
    <div
      className="vh-header-as-label"
    >
      <p>{props.label}</p>
    </div>
  )
}