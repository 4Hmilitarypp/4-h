import * as React from 'react'
import { useFormInput } from '../hooks/hooks'

interface IProps {
  value?: string
  type?: string
  'aria-label'?: string
  id?: string
}

const Input: React.FC<IProps> = ({ ...rest }) => {
  const formInputProps = useFormInput(rest.value || '')

  return <input {...rest} {...formInputProps} />
}
Input.defaultProps = {
  value: undefined,
}

export default Input
