import { nanoid } from 'nanoid'

export const Actions = {
  SetColumns: (_, { columns }) => ({ columns: columns.map(column => ({ ...column, _id: nanoid(4) })) }),
  SetItems: (_, { items }) => ({ items: items.map(item => ({ ...item, _id: nanoid(8) })) })
}
