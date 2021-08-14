import { useEffect, useReducer, useRef, useState } from 'react'

export const useElementRef = () => useRef()

export const usePatchedState = initial => {
  const [state, setState] = useState(initial)
  return [state, value => setState({ ...state, ...value })]
}

export const useRefresh = () => useReducer(state => !state, false)[1]

export const useDifference = (callback, value) => {
  const ref = useRef([])
  if (isChanged(ref.current, value)) {
    ref.current = value
    callback()
  }
}

export const useModel = model => {
  const refresh = useRefresh()

  useEffect((handler = () => refresh()) => (model.on = [...model.on || [], handler] || true) && (() => model.on = model.on.filter(each => each !== handler)), [])

  const apply = patch => {
    model.state = { ...model.state, ...patch }
    model.on?.forEach(each => each())
  }

  return [
    model.state,
    Object
      .entries(model.actions)
      .reduce((result, [key, action]) => ({
        ...result, [key]: payload => {
          const patch = action(model.state, payload)
          patch['then'] ? patch.then(apply) : apply(patch)
        }
      }), {})
  ]
}

export const useDispatchedState = (initial, { before, after } = {}) => {
  const state = useRef(initial)
  const refresh = useRefresh()

  const update = (action, payload) => state.current = { ...state.current, ...action(state.current, payload) }
  const dispatch = (action, payload) => (update(action, payload) || true) && refresh()
  const apply = (action, payload) => update(action, payload)

  const getContext = () => ({ state: state.current, dispatch, apply })

  const prev = after?.map(([selector]) => selector(getContext()))
  before?.forEach(([selector, handler]) => useDifference(() => handler(getContext()), selector(getContext())))
  const next = after?.map(([selector]) => selector(getContext()))
  const includes = after?.map((_, index) => !isChanged(prev[index], next[index]))
  after?.forEach(([selector, handler], index) => useEffect(() => includes[index] && handler(getContext()), selector(getContext())))

  return [state.current, dispatch, apply]
}

export const useMouseEventListener = (event, listener) => {
  useEventListener(event, listener)
}

export const expose = () => console.log('I\'m gonna kick your ass!')

const useEffectEventListener = (event, listener) =>
  useEffect(() => (document.addEventListener(event, listener) || true) && (() => document.removeEventListener(event, listener)), [])

const useRefEventListener = listener => {
  const ref = useRef(listener)
  ref.current = listener
  return ref
}

const useEventListener = (event, listener) => {
  const ref = useRefEventListener(listener)
  useEffectEventListener(event, event => ref.current(event))
}

const isChanged = (a, b) => a.length !== b.length || a.some((x, y) => x !== b[y])