import * as React from 'react'
export const useFormInput = (initialValue: string) => {
  const [value, setValue] = React.useState<string>(initialValue)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setValue(e.target.value)
  return { value, onChange: handleChange }
}
