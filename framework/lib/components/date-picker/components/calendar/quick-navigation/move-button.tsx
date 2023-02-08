import React from 'react'
import { palette } from '@northlight/tokens'
import { Clickable } from '../../../../clickable'
import { P } from '../../../../typography'

export const MoveButton = (props: any) => (
  <Clickable { ...props } w="max-content">
    <P
      variant="14"
      _hover={ {
        borderBottomWidth: '1px',
        borderBottomStyle: 'dashed',
        borderBottomColor: palette.blue['500'],
        marginBottom: '-1px',
      } }
      _active={ {
        color: 'blue.500',
      } }
    >
      { props.children }
    </P>
  </Clickable>
)
