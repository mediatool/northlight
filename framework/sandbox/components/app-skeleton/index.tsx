import React, { ReactNode } from 'react'
import { Grid, GridItem } from '../../../lib/components'

interface Props {
  sidebar: ReactNode
  topbar: ReactNode
  main: ReactNode
}

export const AppSkeleton = ({ sidebar, topbar, main }: Props) => (
  <Grid
    width="100%"
    height="100%"
    templateColumns="5.25rem auto"
    templateRows="4rem auto"
    templateAreas={ `
      "sidebar topbar"
      "sidebar main"
    ` }
  >
    <GridItem gridArea="sidebar">
      { sidebar }
    </GridItem>
    <GridItem gridArea="topbar">
      { topbar }
    </GridItem>
    <GridItem gridArea="main">
      { main }
    </GridItem>
  </Grid>
)
