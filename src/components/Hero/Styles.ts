import styled from 'styled-components'

export const Form = styled.section`
  height: 360px;
  width: 100%;
  background-image: url('https://static.vecteezy.com/ti/fotos-gratis/t2/3343387-desktop-source-code-and-wallpaper-by-coding-and-programming-gratis-foto.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  background-position: center

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    height: auto;
  }
`

export const FormContent = styled.div`
  position: relative;
  color: #ffffff !important;
`

export const HeroTitle = styled.h1`
  font-family: Gloock, serif;
  font-size: 48px;
  color: #ffffff !important;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  @media (max-width: 768px) {
    font-size: 24px;
    padding: 24px 0;
  }
`
