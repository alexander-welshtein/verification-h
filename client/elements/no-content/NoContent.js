import React from 'react'
import ArchiveIcon from '../../../assets/archive.svg'
import './NoContent.sass'

/**
 * @param {import('./NoContent.d.ts').NoContentProps} props
 * @return {*}
 * @constructor
 */
export const NoContent = props => {
  return (
    <div
      className="vh-no-content"
    >
      <div>
        {props.icon || <ArchiveIcon/>}
      </div>
      <p>
        {props.label || 'No Content'}
      </p>
    </div>
  )
}