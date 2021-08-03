import { FunctionComponent } from 'react'
import BaseProps from '../../types/BaseProps'

export interface ListItemProps extends BaseProps {
  value?: string

  onClick?: () => any
}

export const ListItem: FunctionComponent<ListItemProps>