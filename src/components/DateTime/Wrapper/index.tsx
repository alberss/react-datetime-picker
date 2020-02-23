import moment from 'moment'
import React, { useEffect, useRef, useState } from 'react'

// FIX prop types
interface IProps {
  className: string
  closeOnSelectDay: any
  onChange: any
  isDisabled: boolean
}

const Wrapper: React.FC<IProps> = ({ className, closeOnSelectDay, onChange, isDisabled, children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [position, setPosition] = useState({})
  const wrapperRef = useRef<HTMLDivElement>(null)
  const classNames = `wrapper ${ className ? className : '' }`

  const togglePicker = () => {
    if (isDisabled) return

    setIsOpen(!isOpen)
    setPosition(getPosition())
  }

  const getPosition = () => {
    const elem = wrapperRef
    const elemBCR = !!elem.current ? elem.current.getBoundingClientRect() : null

    if (!!elemBCR) {
      return {
        top: Math.round(elemBCR.top + elemBCR.height),
        left: Math.round(elemBCR.left)
      }
    }
    return {}
  }

  const handleDocumentClick = (evt: Event) => {
    if (evt.target !== wrapperRef.current && isOpen) {
      togglePicker()
    }
  }

  const handlePortalPosition = () => {
    if (isOpen) setPosition(getPosition())
  }

  const handleChange = (momentChange: moment.Moment, currentPanel: any) => {
    if (currentPanel === 'day' && closeOnSelectDay) setIsOpen(false)
    if (onChange) onChange(momentChange)
  }

  useEffect(() => {
    window.addEventListener('click', handleDocumentClick, false)

    return () => {
      window.removeEventListener('click', handleDocumentClick)
    }
  })

  return (
    <div ref={ wrapperRef } className={ classNames }>
      <div onClick={ togglePicker }>
        { children }
      </div>
    </div>
  )

}

export default Wrapper
