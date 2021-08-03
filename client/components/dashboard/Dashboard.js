import React from 'react'
import { LaunchViewer } from '../launch-viewer/LaunchViewer'
import { Menu } from '../menu/Menu'
import { WorkspacePlate } from '../workspace-plate/WorkspacePlate'
import { Workspace } from '../workspace/Workspace'
import './Dashboard.sass'

/**
 * @param {import('./Dashboard.d.ts').DashboardProps} props
 * @returns {*}
 * @constructor
 */
export const Dashboard = props => {
  return (
    <div
      className="vh-dashboard"
    >
      <Menu/>
      <Workspace>
        <WorkspacePlate>
          <LaunchViewer/>
        </WorkspacePlate>
      </Workspace>
    </div>
  )
}