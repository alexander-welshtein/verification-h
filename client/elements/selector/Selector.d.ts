import { FunctionComponent } from 'react'
import BaseProps from '../../types/BaseProps'

export interface SelectorProps extends BaseProps {
  label?: string

  // TODO: Shit | Current design dependency | #ihatecss
  labelWidth?: string

  items?: {}[]
  search?: (item: {}, value: string) => boolean
  sort?: (a: {}, b: {}) => number
  toValue?: (item: {}) => string
  toItem?: (item: {}) => any

  onChange?: (value: any) => void
}

export const Selector: FunctionComponent<SelectorProps>