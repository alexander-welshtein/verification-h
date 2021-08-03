import React from 'react'
import { composeClass } from '../../helpers/Utilities'

/**
 * @param {import('./Label.d.ts').LabelProps} props
 * @returns {*}
 * @constructor
 */
export const Label = props => {
  const className = composeClass(
    'vh-label',
    props.primary && 'vh-label-primary',
    props.secondary && 'vh-label-secondary',
    props.accent && 'vh-label-accent',
    props.className
  )

  return (
    <div
      className={className}
    >
      {props.value}
    </div>
  )
}
