import styled from 'styled-components'

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const BtnPesquisar = styled.button`
  background-color: var(--cor-principal);
  border: none;
  padding: 10px 16px;
  font-size: 16px;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  margin: 0px auto 24px;
  width: 500px;
  &:hover {
    background-color: #9fc131;
    color: var(--cor-principal);
  }
  @media (max-width: 768px) {
    margin: 0px auto;
    width: auto;
  }
`

export const Title = styled.text`
  text-transform: uppercase;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  padding-top: 24px;
`
