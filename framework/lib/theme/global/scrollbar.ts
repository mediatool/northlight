import { borderRadius, color } from '@mediatool/tokens'

export const scrollbarStyles = {
  '::-webkit-scrollbar': {
    width: '8px',
    height: '8px',
  },
  '::-webkit-scrollbar-track': {
    background: color.background.scrollbar.track,
  },
  '::-webkit-scrollbar-thumb': {
    borderRadius: borderRadius.scrollbar.thumb,
    border: `2px solid ${color.border.scrollbar.thumb}`,
    backgroundClip: 'padding-box !important',
    background: color.background.scrollbar.thumb,
  },
  '::-webkit-scrollbar-thumb:hover': {
    borderRadius: borderRadius.scrollbar.thumb,
    border: `1px solid ${color.border.scrollbar.thumb}`,
    backgroundClip: 'padding-box !important',
    background: color.background.scrollbar.thumb,
  },
}
