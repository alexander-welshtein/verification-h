import React from 'react'
import { Label } from '../../elements/label/Label'
import './LaunchItem.sass'

/**
 * @param {import('./LaunchItem.d.ts').LaunchItemProps} props
 * @returns {*}
 * @constructor
 */
export const LaunchItem = ({ title, description, date, cover }) => {
  return (
    <div
      className="vh-launch-item"
    >
      <div
        className="cover"
        style={{ backgroundImage: `url("${cover}")` }}
      />
      <Label
        className="title"
        value={title}
        primary
      />
      <Label
        className="description"
        value={description}
        secondary
      />
      <Label
        className="date"
        value={date.toLocaleString()}
      />
    </div>
  )
}