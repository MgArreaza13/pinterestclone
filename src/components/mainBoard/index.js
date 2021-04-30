import React from "react";
import Pin from "../pin";
import { MainBoardContainer, Container } from "./styles";

function MainBoard({ pins }) {
  return (
    <MainBoardContainer>
      <Container>
        {pins.map((pin, i) => {
          let urls  = pin.preview_photos[0].urls;
          return <Pin key={i} urls={urls} />;
        })}
      </Container>
    </MainBoardContainer>
  );
}

export default MainBoard;
