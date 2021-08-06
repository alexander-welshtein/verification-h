import React from 'react'
import LayoutIcon from '../../../assets/layout.svg'
import { Menu } from '../menu/Menu'
import './Sidebar.sass'

/**
 * @return {*}
 * @constructor
 */
export const Sidebar = () => {
  return (
    <div
      className="vh-sidebar"
    >
      <div className="logo"/>
      <Menu
        items={[
          {
            label: 'Workspace',
            icon: <LayoutIcon/>
          }
        ]}
        selector={({ label }) => label === 'Workspace'}
      />
    </div>
  )
}