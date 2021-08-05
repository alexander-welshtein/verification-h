import React from 'react'
import './Row.sass'

/**
 * @param columns
 * @param item
 * @return {*}
 * @constructor
 */
export const Row = ({ columns, item }) => {
  return (
    <div
      className="vh-table-row"
      style={{
        gridTemplateColumns: columns.map(column => column.width ? `${column.width}rem` : 'minmax(0, 1fr)').join(' '),
        gridTemplateRows: 'min-content'
      }}
    >
      {columns.map(column => (
        <div
          key={column._id}
          style={{
            ...column.width && { flexBasis: `${column.width}rem` }
          }}
        >
          {column.cell(item)}
        </div>
      ))}
    </div>
  )
}