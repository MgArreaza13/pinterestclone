import React from 'react'
import { PinContainer, Container } from "./styles"

function Pin({ urls }) {
  return (
    <PinContainer>
      <Container>
        <img src={urls?.regular} alt=""/>
      </Container>
    </PinContainer>
  )
}

export default Pin
