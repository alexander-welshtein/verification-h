import { FunctionComponent } from 'react'
import BaseProps from '../../types/BaseProps'

export interface PopupProps extends BaseProps {
  shown?: boolean
}

export const Popup: FunctionComponent<PopupProps>