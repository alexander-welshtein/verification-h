import React from 'react'
import { useDispatchedState } from '../../helpers/Hooks'
import { composeClass } from '../../helpers/Utilities'
import { Actions } from './Actions'
import './SequenceToggle.sass'

/**
 * @param {import('./SequenceToggle.d.ts').SequenceToggleProps} props
 * @returns {*}
 * @constructor
 */
export const SequenceToggle = props => {
  const [state, dispatch] = useDispatchedState({
    selection: props.items[0],
    selectionIndex: 0,
    items: []
  }, {
    before: [
      [() => [props.items], ({ apply }) => apply(Actions.SetItems, { items: props.items })],
      [() => [props.value], ({ apply }) => apply(Actions.Select, { predicate: props.value })]
    ],
    after: [
      [({ state }) => [state.selectionIndex], ({ state }) => props.onChange?.(state.selection)]
    ]
  })

  const className = composeClass(
    'vh-sequence-toggle',
    props.reversed && 'vh-sequence-toggle-reversed'
  )

  return (
    <div
      className={className}
      onClick={() => dispatch(Actions.Toggle)}
    >
      <div
        className="icon"
      >
        {state.selection.icon}
      </div>
      <div
        className="value"
      >
        {state.selection.value}
      </div>
    </div>
  )
}