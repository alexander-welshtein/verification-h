import React from 'react'
import './Workspace.sass'

/**
 * @param {import('./Workspace.d.ts').WorkspaceProps} props
 * @returns {*}
 * @constructor
 */
export const Workspace = props => {
  return (
    <div
      className="vh-workspace"
    >
      {props.children}
    </div>
  )
}