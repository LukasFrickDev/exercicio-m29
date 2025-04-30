import React from 'react'
import { Form, FormContent, HeroTitle } from './Styles' // Corrigindo a importação

const Hero = () => (
  <Form>
    <FormContent className="container">
      <HeroTitle>
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitle>
    </FormContent>
  </Form>
)

export default Hero
