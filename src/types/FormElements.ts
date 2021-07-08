export interface TextInputProps {
  field: string,
  label?: string,
  placeholder?: string,
  required?: boolean,
  validateOnBlur?: boolean,
  validate?: (value: string) => string | void
}