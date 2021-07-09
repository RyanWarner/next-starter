import styled from 'styled-components'

export const StickerFormComponent = styled.div`
  max-width: 75ch;

  form {
    display: flex;
    flex-direction: column;
  }

  form > * {
    padding-bottom: 1.25rem;
  }

  button {
    padding: 0.5rem 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 1px solid black;
    border-radius: 6px;
    max-width: max-content;
  }

  button:hover {
    background-color: limegreen;
    color: white;
  }
`
