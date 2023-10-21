export type TAlignSelfEnum =
  | 'auto'
  | 'normal'
  | 'center'
  | 'start'
  | 'end'
  | 'self-start'
  | 'self-end'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'stretch'
  | 'safe center'
  | 'unsafe center'
  | 'inherit'
  | 'initial'
  | 'unset'

const alignSelf: { [key in TAlignSelfEnum]: string } = {
  auto: 'auto',
  normal: 'normal',
  center: 'center',
  start: 'start',
  end: 'end',
  'self-start': 'self-start',
  'self-end': 'self-end',
  'flex-start': 'flex-start',
  'flex-end': 'flex-end',
  baseline: 'baseline',
  'first baseline': 'first baseline',
  'last baseline': 'last baseline',
  stretch: 'stretch',
  'safe center': 'safe center',
  'unsafe center': 'unsafe center',
  inherit: 'inherit',
  initial: 'initial',
  unset: 'unset',
}

export default alignSelf
