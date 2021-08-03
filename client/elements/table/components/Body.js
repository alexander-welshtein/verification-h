import React from 'react'
import { NoContent } from '../../no-content/NoContent'
import './Body.sass'
import { Row } from './Row'

/**
 *
 * @param columns
 * @param items
 * @param noItemsLabel
 * @return {JSX.Element}
 * @constructor
 */
export const Body = ({ columns, items, noItemsLabel }) => {
  return (
    <div
      className="vh-table-body"
      style={{
        gridTemplateRows: `repeat(${items.length}, min-content)`
      }}
    >
      {items.map(item => (
        <Row
          key={item._id}
          columns={columns}
          item={item}
        />
      ))}
      {!items.length && (
        <NoContent
          label={noItemsLabel}
        />
      )}
    </div>
  )
}