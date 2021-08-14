import React from 'react'
import { Pager } from '../pager/Pager'
import { SettingsPanel } from '../settings-panel/SettingsPanel'
import { Sidebar } from '../sidebar/Sidebar'
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
      <Pager>
        <Workspace/>
        <SettingsPanel/>
      </Pager>
    </div>
  )
}