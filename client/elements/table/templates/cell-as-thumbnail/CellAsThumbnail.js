import React from 'react'
import './CellAsThumbnail.sass'

/**
 * @param {import('./CellAsThumbnail.d.ts').CellAsThumbnailProps} props
 * @return {*}
 * @constructor
 */
export const CellAsThumbnail = props => {
  return (
    <div
      className="vh-cell-as-thumbnail"
    >
      <div
        style={{ backgroundImage: `url("${props.image}")` }}
      />
      <p>
        {props.label}
      </p>
    </div>
  )
}