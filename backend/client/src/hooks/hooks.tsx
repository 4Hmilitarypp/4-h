import * as React from 'react'
import { FormInputEvent, IHashProps } from '../types'

interface IUseFormInputReturn {
  value: string
  onChange: (e: FormInputEvent) => void
}

export const useFormInput = (initialValue: string): IUseFormInputReturn => {
  const [value, setValue] = React.useState<string>(initialValue)
  const handleChange = (e: FormInputEvent) => setValue(e.target.value)
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
  })
}

interface IUseFlashArgs {
  initialSubmitted: boolean
  timeoutLength?: number
}

interface IFlashReturn {
  submitted: boolean
  setSubmitted: (newState: boolean) => void
  error?: string
  setError: (newState?: string) => void
}

export const useFlash = ({ initialSubmitted, timeoutLength = 2500 }: IUseFlashArgs): IFlashReturn => {
  const [submitted, setSubmitted] = React.useState<boolean>(initialSubmitted)
  const [error, setError] = React.useState<string | undefined>(undefined)

  React.useEffect(
    () => {
      if (submitted) {
        const timeout = setTimeout(() => {
          setSubmitted(false)
        }, timeoutLength)
        return () => {
          clearTimeout(timeout)
        }
      }
      return undefined
    },
    [submitted]
  )

  return { submitted, setSubmitted, error, setError }
}
