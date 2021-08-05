import React from 'react'
import { CellAsExpandableLabel } from './cell-as-expandable-label/CellAsExpandableLabel'
import { CellAsLabel } from './cell-as-label/CellAsLabel'
import { CellAsThumbnail } from './cell-as-thumbnail/CellAsThumbnail'
import { HeaderAsLabel } from './header-as-label/HeaderAsLabel'

export const TableTemplates = {
  header: {
    as: {
      label: ({ label }) => <HeaderAsLabel
        label={label}
      />
    }
  },

  cell: {
    as: {
      label: ({ label }) => <CellAsLabel
        label={label}
      />,

      thumbnail: ({ label, image }) => <CellAsThumbnail
        label={label}
        image={image}
      />,

      expandableLabel: ({ label }) => <CellAsExpandableLabel
        label={label}
      />
    }
  }
}