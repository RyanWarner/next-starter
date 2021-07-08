import { ReactElement } from 'react'
import { Form } from 'informed'

import * as S from './styles'
import TextInput from 'components/forms/TextInput'
import { StickerFormValues } from 'types/StickerFormValues'

const StickerForm = (): ReactElement => {
  const handleSubmit = (values: StickerFormValues): void => {
    console.log('values', values)
  }

  return (
    <S.StickerFormComponent>
      <Form onSubmit={handleSubmit}>
        <TextInput field='name' label='Name' />
        <button>Submit</button>
      </Form>
    </S.StickerFormComponent>
  )
}

export default StickerForm
