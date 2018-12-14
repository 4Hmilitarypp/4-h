import * as React from 'react'
import { useFormInput } from '../hooks/hooks'

interface IProps {
  id?: string
  readOnly?: boolean
  value?: string
}

const TextArea: React.FC<IProps> = props => {
  TextArea.defaultProps = {
    readOnly: false,
    value: undefined,
  }

  const value = useFormInput(props.value || '')

  return <textarea {...props} {...value} />
}

export default TextArea
