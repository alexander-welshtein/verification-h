import { FunctionComponent } from 'react'
import BaseProps from '../../types/BaseProps'

export interface MenuItemProps extends BaseProps {
  label?: string
  icon?: any
  selected?: boolean
  onClick?: () => any
}

export const MenuItem: FunctionComponent<MenuItemProps>