import { RefObject } from 'react'

export function useElementRef(): RefObject<HTMLElement>

export function usePatchedState<T>(initial?: T): [state: T, patchState: (value: T | {}) => any]

export function useRefresh(): () => void

export function useModel<M>(model: M): [select: (select: (model: {}) => any) => any, dispatch: (action: string, payload?: any) => any]

export function useDispatchedState<T>(
  initial: T,
  options?: {
    before?: [
      (context?: DispatchedStateContext<T>) => any[],
      (context?: DispatchedStateContext<T>) => any
    ][],
    after?: [
      (context?: DispatchedStateContext<T>) => any[],
      (context?: DispatchedStateContext<T>) => any
    ][]
  }
): [
  state: T,
  dispatch: (action: any, payload?: any) => any,
  apply: (action: any, payload?: any) => any
]

interface DispatchedStateContext<T> {
  state: T,
  dispatch: (action: any, payload?: any) => any,
  apply: (action: any, payload?: any) => any
}

export function useEffectEventListener(event: string, listener: EventListener): void

export function useRefEventListener(listener: EventListener): RefObject<EventListener>

export function useEventListener<E extends keyof DocumentEventMap>(event: E, listener: (event: Event) => any): void

export function useMouseEventListener<E extends keyof DocumentEventMap>(event: E, listener: (event: MouseEvent) => any): void

