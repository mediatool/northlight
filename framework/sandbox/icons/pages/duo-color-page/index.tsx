import React from 'react'
import { IconCard, IconsGrid } from '../../components'
import { useIcons } from '../../utils'

const DuoColorPage = () => {
  const icons = useIcons('duo')

  return (
    <IconsGrid>
      { icons.map((icon) => (
        <IconCard key={ icon.label } { ...icon } />
      )) }
    </IconsGrid>
  )
}

export default DuoColorPage
