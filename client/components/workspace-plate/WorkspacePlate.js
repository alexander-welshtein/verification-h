import React from 'react'
import './WorkspacePlate.sass'

/**
 * @param {import('./WorkspacePlate.d.ts').WorkspacePlateProps} props
 * @returns {*}
 * @constructor
 */
export const WorkspacePlate = props => {
  return (
    <div
      className="vh-workspace-plate"
    >
      {props.children}
    </div>
  )
}