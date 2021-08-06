import React from 'react'
import { MenuItem } from '../menu-item/MenuItem'
import './Menu.sass'

/**
 * @param props {import('./Menu.d.ts').MenuProps}
 * @returns {*}
 * @constructor
 */
export const Menu = props => {
  return (
    <div
      className="vh-menu"
    >
      {props.items.map((item, index) => (
        <MenuItem
          key={index}
          label={item.label}
          icon={item.icon}
          selected={props.selector(item)}
        />
      ))}
    </div>
  )
}