import React from 'react'
import { composeClass } from '../../helpers/Utilities'
import './MenuItem.sass'

/**
 * @param {import('./MenuItem.d.ts').MenuItemProps} props
 * @return {JSX.Element}
 * @constructor
 */
export const MenuItem = props => {
  const className = composeClass(
    'vh-menu-item',
    props.selected && 'vh-menu-item-selected'
  )

  return (
    <div
      className={className}
      onClick={props.onClick}
    >
      <div>
        {props.icon}
      </div>
      <p>{props.label}</p>
    </div>
  )
}