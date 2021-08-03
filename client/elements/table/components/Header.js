import React from 'react'
import './Header.sass'

export const Header = ({ columns, items }) => {
  return (
    <div
      className="vh-table-header"
    >
      {columns.map(column => (
        <div
          key={column._id}
          style={{
            ...column.width && { flexBasis: `${column.width}rem` }
          }}
        >
          {column.header(items)}
        </div>
      ))}
    </div>
  )
}