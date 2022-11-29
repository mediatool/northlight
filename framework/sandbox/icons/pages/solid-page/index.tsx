import React from 'react'
import { IconCard, IconsGrid } from '../../components'
import { useIcons } from '../../utils'

const SolidPage = () => {
  const icons = useIcons('solid')

  return (
    <IconsGrid>
      { icons.map((icon) => (
        <IconCard key={ icon.label } { ...icon } />
      )) }
    </IconsGrid>
  )
}

export default SolidPage
