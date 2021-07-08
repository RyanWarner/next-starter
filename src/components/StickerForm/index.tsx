import { ReactElement } from 'react'
import { Form } from 'informed'

import * as S from './styles'
import TextInput from 'components/forms/TextInput'
import { StickerFormValues } from 'types/StickerFormValues'
import { TextInputProps } from 'types/FormElements'

const nameField: TextInputProps = {
  field: 'name',
  label: 'Name',
  required: true,
  validate: (value: string) => {
    if (!value) return 'This field is required.'
    if (value.length < 2) return 'Must be at least 2 characters.'
  }
}

const StickerForm = (): ReactElement => {
  const handleSubmit = (values: StickerFormValues): void => {
    console.log('values', values)
  }

  return (
    <S.StickerFormComponent>
      <Form onSubmit={handleSubmit}>
        <TextInput {...nameField} />
        <button>Submit</button>
      </Form>
    </S.StickerFormComponent>
  )
}

export default StickerForm
