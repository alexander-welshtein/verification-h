import React from 'react'
import CloseIcon from '../../../assets/close.svg'
import ListIcon from '../../../assets/list.svg'
import { Bench } from '../../helpers/Bench'
import { useDispatchedState, useElementRef, useMouseEventListener } from '../../helpers/Hooks'
import { composeClass } from '../../helpers/Utilities'
import { List } from '../list/List'
import { Popup } from '../popup/Popup'
import { Actions } from './Actions'
import './Selector.sass'

/**
 * @param {import('./Selector.d.ts').SelectorProps} props
 * @returns {*}
 * @constructor
 */
export const Selector = props => {
  const [state, dispatch] = useDispatchedState({
    opened: false,
    search: props.search,
    sort: props.sort,
    toValue: props.toValue,
    query: '',
    confirmedQuery: '',
    items: [],
    displayedItems: []
  }, {
    before: [
      [() => [props.items], ({ apply }) => apply(Actions.SetItems, { items: props.items })]
    ],
    after: [
      [({ state }) => [state.confirmedQuery], ({ state }) => props.onChange?.(state.confirmedQuery)]
    ]
  })

  const element = useElementRef()

  useMouseEventListener('click', event =>
    state.opened
    && !Bench.intersects.pointToElementRect(
      event.clientX,
      event.clientY,
      element.current.getBoundingClientRect())
    && !Bench.intersects.pointToElementRect(
      event.clientX,
      event.clientY,
      element.current.getBoundingClientRect())
    && dispatch(Actions.Close)
  )

  const className = composeClass(
    'vh-selector',
    state.opened && 'vh-selector-opened'
  )

  return (
    <div
      className={className}
      ref={element}
    >
      <div
        className="before"
      >
        <div className="icon-edit">
          <ListIcon/>
        </div>
        {props.label && (
          <p
            className="label"
            style={{
              // TODO: Shit | Current design dependency | #ihatecss
              width: props.labelWidth + 'rem' || 'auto'
            }}
          >
            {props.label}
          </p>
        )}
      </div>
      <div className="control">
        <input
          type="text"
          value={state.query}
          onChange={event => dispatch(Actions.SetQuery, { query: event.target.value })}
          onClick={() => dispatch(Actions.Open)}
          onFocus={() => dispatch(Actions.Open)}
          onKeyPress={event => event.key === 'Enter' && dispatch(Actions.FillQuery)}
        />
      </div>
      <div
        className="after"
      >
        {!!state.query.length && (
          <div
            className="icon-clear"
            onClick={() => dispatch(Actions.ClearQuery)}
          >
            <CloseIcon/>
          </div>
        )}
      </div>
      <Popup
        shown={state.opened}
      >
        <List
          items={state.displayedItems}
          toItem={item => (
            <div
              key={item.id}
              onClick={() => dispatch(Actions.SetQueryAndConfirm, { query: props.toValue(item) })}
            >
              {props.toItem(item)}
            </div>
          )}
        />
      </Popup>
    </div>
  )
}