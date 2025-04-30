import React, { useState, FormEvent } from 'react'
import { StyledForm, BtnPesquisar, Title } from './Styles' // Agora está correto!
import styled from 'styled-components'

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  margin: 0px auto;
  width: 500px;
  @media (max-width: 768px) {
    margin: 0px auto;
    width: 250px;
  }
`

interface Props {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLowerCase())
  }

  return (
    <StyledForm onSubmit={aoEnviarForm}>
      <Title>Pesquise sua Tech</Title>
      <Input
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BtnPesquisar type="submit">Pesquisar</BtnPesquisar>
    </StyledForm>
  )
}

export default FormVagas
