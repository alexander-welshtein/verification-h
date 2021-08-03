import React from 'react'
import './CellAsLabel.sass'

/**
 * @param {import('./CellAsLabel.d.ts').CellAsLabelProps} props
 * @return {*}
 * @constructor
 */
export const CellAsLabel = props => {
  return (
    <div
      className="vh-cell-as-label"
    >
      <p>{props.label}</p>
    </div>
  )
}