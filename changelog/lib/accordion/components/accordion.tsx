import React, { useState, ReactNode } from 'react'
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

    setIsOpen((isOpen) => !isOpen)
  }

  const baseClass = 'changelog-accordion'
  const className = [baseClass, isOpen ? 'changelog-accordion--open' : ''].join(' ')

  return (
    <div
      onClick={ toggle }
      className={className}
      data-testid="changelog-accordion-root"
    >
      <div className="summary-wrapper">
        <div className="summary">
          { summary }
        </div>
        <div className="caret-icon">
          <MTIcon
            className="icon"
            type={ isOpen ? 'caret-up' : 'caret-down' }
          />
        </div>
      </div>
      { isOpen && (
        <div className='content' data-testid="changelog-accordion-content">
          {children}
        </div>
      )}
    </div>
  )
}
