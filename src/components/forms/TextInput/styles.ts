import styled, { css } from 'styled-components'

import { body10, fontFamily } from 'styles/type'

export const TextInputComponent = styled.div`
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  ${body10};
  box-sizing: border-box;
  display: block;
  width: 100%;
  flex-grow: 1;
  background: transparent;
  border-radius: 6px;
  border: 1px solid black;
  padding: 0.5rem 0;
  color: ${({ theme }) => theme.colors.text10};
  font-family: ${fontFamily};
  transition: 0.2s;
  cursor: text;
  transition: all 0.18s ease;
  box-shadow: none;

  &:-webkit-autofill::first-line {
    ${body10};
    color: ${({ theme }) => theme.colors.text10};
    font-family: ${fontFamily};
  }
`

export const Error = styled.p`
  color: red;
`

export const Labels = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 3px 4px;
  height: 20px;
`

export const Label = styled.label`

`
