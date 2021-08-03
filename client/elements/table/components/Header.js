import React from 'react'
import './Header.sass'

export const Header = ({ columns, items }) => {
  return (
    <div
      className="vh-table-header"
      style={{
        gridTemplateColumns: columns.map(column => column.width ? `${column.width}rem` : '1fr').join(' '),
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
          {column.header(items)}
        </div>
      ))}
    </div>
  )
}