import { FunctionComponent } from 'react'
import BaseProps from '../../types/BaseProps'

export interface SequenceToggleProps extends BaseProps {
  items?: Item[]
  value?: (item: Item) => boolean
  reversed?: boolean

  onChange?: (item: Item) => any
}

interface Item {
  value?: string
  icon?: any
}

export const SequenceToggle: FunctionComponent<SequenceToggleProps>