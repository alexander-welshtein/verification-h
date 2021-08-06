import React from 'react'
import { LaunchViewer } from '../launch-viewer/LaunchViewer'
import { Sidebar } from '../sidebar/Sidebar'
import { WorkspacePlate } from '../workspace-plate/WorkspacePlate'
import { Workspace } from '../workspace/Workspace'
import './Dashboard.sass'

/**
 * @returns {*}
 * @constructor
 */
export const Dashboard = () => {
  return (
    <div
      className="vh-dashboard"
    >
      <Sidebar/>
      <Workspace>
        <WorkspacePlate>
          <LaunchViewer/>
        </WorkspacePlate>
      </Workspace>
    </div>
  )
}