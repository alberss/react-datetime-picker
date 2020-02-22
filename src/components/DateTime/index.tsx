import moment from 'moment'
import React, { CSSProperties, useState } from 'react'
import Styled from './styles'

interface IProps {
  onChange: (value: string) => void
  className?: string
  style?: CSSProperties
  placeholder?: string
  isDisabled?: boolean
  isInvalid?: boolean
  initialValue?: string
  minDate?: string
  maxDate?: string
}

const DateTime: React.FC<IProps> = ({ className, style, initialValue, onChange, minDate, maxDate, placeholder, isDisabled }) => {
  const [value, setValue] = useState(initialValue ? moment(initialValue) : undefined)
  const momentValue = !!value ? value : moment()
  const min = minDate && moment(minDate)
  const max = maxDate && moment(maxDate)

  const handleChange = (nextValue: moment.Moment) => {
    setValue(nextValue)
    onChange(nextValue.toISOString())
  }

  return (
    <Styled>
      <input
         className="input"
         placeholder={ placeholder }
         value={ !!value ? value.format('DD/MM/YYYY HH:mm:ss') : '' }
         disabled={ isDisabled }
      />
    </Styled>
  )
}

export default DateTime
