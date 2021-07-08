export interface TextInputProps {
  field: string,
  label?: string,
  placeholder?: string,
  required?: boolean,
  errorMessage?: string,
  validate?: (value: string) => string
}