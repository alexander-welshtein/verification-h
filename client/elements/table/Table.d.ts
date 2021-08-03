import { FunctionComponent } from 'react'
import BaseProps from '../../types/BaseProps'

export interface TableProps extends BaseProps {
  items?: {}[]
  columns?: {
    header?: (items: {}[]) => any
    cell?: (item: {}[]) => any
    footer?: (items: {}[]) => any
    width?: number | string
  }[]
  filter: (item: {}) => boolean
  noItemsLabel?: string
}

export const Table: FunctionComponent<TableProps>