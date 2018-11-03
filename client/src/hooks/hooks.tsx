import * as React from 'react'
import { IHashProps } from '../types'

export const useFormInput = (initialValue: string) => {
  const [value, setValue] = React.useState<string>(initialValue)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setValue(e.target.value)
  return { value, onChange: handleChange }
}

export const useHash = ({ ref, hash, location }: IHashProps) => {
  React.useEffect(() => {
    if (location && location.hash === hash) {
      const pastEventNode = ref.current
      if (pastEventNode) {
        pastEventNode.scrollIntoView()
      }
    }
  }, [])
}
