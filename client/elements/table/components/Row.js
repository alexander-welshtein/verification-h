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