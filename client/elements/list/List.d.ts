import { FunctionComponent } from 'react'
import BaseProps from '../../types/BaseProps'

export interface ListProps extends BaseProps {
  items?: any[]
  toItem?: (item: any) => any
  noItemsLabel?: string
}

export const List: FunctionComponent<ListProps>