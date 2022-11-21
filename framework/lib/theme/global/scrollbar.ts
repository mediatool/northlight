export const scrollbarStyles = {
  '::-webkit-scrollbar': {
    width: '8px',
    height: '8px',
  },
  '::-webkit-scrollbar-track': {
    background: 'background.scrollbar.track',
  },
  '::-webkit-scrollbar-thumb': {
    borderRadius: 'scrollbar.thumb',
    border: '2px solid',
    borderColor: 'border.scrollbar.thumb',
    backgroundClip: 'padding-box !important',
    background: 'background.scrollbar.thumb',
  },
  '::-webkit-scrollbar-thumb:hover': {
    borderRadius: 'scrollbar.thumb',
    border: '1px solid ',
    borderColor: 'border.scrollbar.thumb',
    backgroundClip: 'padding-box !important',
    background: 'background.scrollbar.thumb',
  },
}
