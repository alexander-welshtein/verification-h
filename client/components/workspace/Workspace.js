import React from 'react'
import { LaunchViewer } from '../launch-viewer/LaunchViewer'
import { WorkspacePlate } from '../workspace-plate/WorkspacePlate'
import './Workspace.sass'

/**
 * @returns {*}
 * @constructor
 */
export const Workspace = () => {
  return (
    <div
      className="vh-workspace"
    >
      <WorkspacePlate>
        <LaunchViewer/>
      </WorkspacePlate>
    </div>
  )
}