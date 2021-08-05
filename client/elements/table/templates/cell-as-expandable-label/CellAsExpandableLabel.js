import React, { useState } from 'react'
import { composeClass } from '../../../../helpers/Utilities'
import './CellAsExpandableLabel.sass'

/**
 * @param {import('./CellAsExpandableLabel.d.ts').CellAsExpandableLabelProps} props
 * @return {*}
 * @constructor
 */
export const CellAsExpandableLabel = props => {
  const [expanded, setExpanded] = useState(false)

  const className = composeClass(
    'vh-cell-as-expandable-label',
    expanded && 'vh-cell-as-expandable-label-expanded'
  )

  return (
    <div
      className={className}
      onMouseLeave={() => setExpanded(false)}
    >
      <p
        onClick={() => setExpanded(!expanded)}
      >
        {props.label}
      </p>
    </div>
  )
}