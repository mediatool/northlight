import React, { ReactNode, useState } from 'react'
import { MTIcon } from 'mt-ui'

export interface AccordionProps {
  summary: ReactNode
  children: ReactNode
  onExpand?: () => void
}

export const Accordion = ({ summary, children, onExpand }: AccordionProps) => {
  const [ isOpen, setIsOpen ] = useState(false)

  const toggle = () => {
    if (!isOpen) {
      onExpand?.()
    }

    setIsOpen((open) => !open)
  }

  const baseClass = 'changelog-accordion'
  const className = [ baseClass, isOpen ? 'changelog-accordion--open' : '' ].join(' ')

  return (
    <div
      className={ className }
      data-testid="changelog-accordion-root"
    >
      <div className="summary-wrapper">
        <div className="summary">
          { summary }
        </div>
        <div
          className="caret-icon"
          onClick={ toggle }
          data-testid="changelog-accordion-caret-icon"
        >
          <MTIcon
            className="icon"
            type={ isOpen ? 'caret-up' : 'caret-down' }
          />
        </div>
      </div>
      { isOpen && (
        <div className="content" data-testid="changelog-accordion-content">
          { children }
        </div>
      ) }
    </div>
  )
}
