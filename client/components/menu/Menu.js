import React from 'react'
import { useModel } from '../../helpers/Hooks'
import { UIModel } from '../../models/UI'
import { MenuItem } from '../menu-item/MenuItem'
import './Menu.sass'

/**
 * @returns {*}
 * @constructor
 */
export const Menu = () => {
  const [{ items, selector }, { changeSelector }] = useModel(UIModel)

  return (
    <div
      className="vh-menu"
    >
      <div
        className="pointer"
        style={{
          top: (items.findIndex(selector) * 4) + 'rem'
        }}
      />
      {items.map((item, index) => (
        <MenuItem
          key={index}
          label={item.label}
          icon={item.icon}
          selected={selector(item)}
          onClick={() => changeSelector({ selector: ({ label }) => label === item['label'] })}
        />
      ))}
    </div>
  )
}