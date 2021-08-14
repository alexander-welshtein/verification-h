import React from 'react'
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
      <Menu/>
    </div>
  )
}