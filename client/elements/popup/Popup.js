import React from 'react'
import { composeClass } from '../../helpers/Utilities'
import './Popup.sass'

/**
 *
 * @param {import('./Popup.d.ts').PopupProps} props
 * @returns {*}
 * @constructor
 */
export const Popup = props => {
  const className = composeClass(
    'vh-popup',
    'vh-popup-dark',
    props.shown && 'vh-popup-shown'
  )

  return (
    <div
      className={className}
    >
      {props.children}
    </div>
  )
}