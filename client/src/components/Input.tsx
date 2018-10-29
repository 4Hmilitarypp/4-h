import { useFormInput } from 'hooks/hooks'
import * as React from 'react'

interface IProps {
  value?: string
  readOnly?: boolean
  type?: string
  'aria-label'?: string
  id?: string
}

const Input: React.SFC<IProps> = ({ readOnly, ...rest }) => {
  const value = useFormInput(rest.value || '')

  return <input {...rest} {...value} onClick={ev => !readOnly && ev.stopPropagation()} readOnly={readOnly} />
}
Input.defaultProps = {
  readOnly: false,
  value: undefined,
}

export default Input
