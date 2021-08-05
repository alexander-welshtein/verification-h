import { FunctionComponent } from 'react'
import BaseProps from '../../../../types/BaseProps'

export interface CellAsExpandableLabelProps extends BaseProps {
  label?: string
}

export const CellAsExpandableLabel: FunctionComponent<CellAsExpandableLabelProps>