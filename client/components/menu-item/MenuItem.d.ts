import { FunctionComponent } from 'react'
import BaseProps from '../../types/BaseProps'

export interface MenuItemProps extends BaseProps {
  label?: string
  icon?: any
  selected?: boolean
}

export const MenuItem: FunctionComponent<MenuItemProps>