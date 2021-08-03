import { FunctionComponent } from 'react'
import BaseProps from '../../../../types/BaseProps'

export interface CellAsThumbnailProps extends BaseProps {
  image?: string | any
  label?: string
}

export const CellAsThumbnail: FunctionComponent<CellAsThumbnailProps>