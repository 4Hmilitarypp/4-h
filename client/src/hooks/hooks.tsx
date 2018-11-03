import * as React from 'react'
import { IHashProps } from '../types'

export const useFormInput = (initialValue: string) => {
  const [value, setValue] = React.useState<string>(initialValue)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setValue(e.target.value)
  return { value, onChange: handleChange }
}

export const useHash = ({ refToFocus, hash, location }: IHashProps) => {
  React.useEffect(() => {
    if (location && location.hash === hash) {
      const node = refToFocus.current
      if (node) {
        node.scrollIntoView()
      }
    }
  }, [])
}
