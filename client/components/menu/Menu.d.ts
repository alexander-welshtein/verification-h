import { FunctionComponent } from 'react'
import BaseProps from '../../types/BaseProps'

export interface MenuProps extends BaseProps {
  items?: MenuItem[]
  selector?: (item: MenuItem) => boolean
}

interface MenuItem {
  label?: string
  icon?: any
}

export const Menu: FunctionComponent<MenuProps>