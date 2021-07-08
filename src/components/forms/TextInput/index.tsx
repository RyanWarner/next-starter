import { useField } from 'informed'

import * as S from './styles'
import { TextInputProps } from 'types/FormElements'

const TextInput = (props: TextInputProps) => {
  const { label, field, validateOnBlur } = props
  const { fieldState, fieldApi, render, ref, userProps } = useField({ ...props })

  const { value, error } = fieldState
  const { setValue, setTouched } = fieldApi
  const { onChange, onBlur, ...rest } = userProps

  return render(
    <S.TextInputComponent>
      {label && <S.Label htmlFor={field}>{label}</S.Label>}
      <S.Input
        {...rest}
        id={field}
        ref={ref}
        value={!value ? '' : value}
        onChange={e => {
          setValue(e.target.value)
          if (onChange) {
            onChange(e)
          }
        }}
        onBlur={e => {
          setTouched(true)
          validateOnBlur && fieldApi.validate()
          if (onBlur) {
            onBlur(e)
          }
        }}
      />
      {error && <S.Error>{error}</S.Error>}
    </S.TextInputComponent>
  )
}

TextInput.defaultProps = {
  validateOnBlur: true
}

export default TextInput