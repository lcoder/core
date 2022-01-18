// using literal strings instead of numbers so that it's easier to inspect
// debugger events

export const enum TrackOpTypes {
  /** 读取属性操作 */
  GET = 'get',
  HAS = 'has',
  ITERATE = 'iterate'
}

export const enum TriggerOpTypes {
  SET = 'set',
  ADD = 'add',
  DELETE = 'delete',
  CLEAR = 'clear'
}
