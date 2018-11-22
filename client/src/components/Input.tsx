import * as React from 'react'
import { useFormInput } from '../hooks/hooks'

interface IProps {
  value?: string
  readOnly?: boolean
  type?: string
  'aria-label'?: string
  id?: string
}

const Input: React.FC<IProps> = ({ readOnly, ...rest }) => {
  const formInputProps = useFormInput(rest.value || '')

  return <input {...rest} {...formInputProps} onClick={ev => !readOnly && ev.stopPropagation()} readOnly={readOnly} />
}
Input.defaultProps = {
  readOnly: false,
  value: undefined,
}

export default Input
