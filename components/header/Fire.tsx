import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  margin: 6px auto;
  width: 12px;
  height: 12px;
  position: relative;
  transform-origin: center bottom;
  animation-name: flicker;
  animation-duration: 5ms;
  animation-delay: 100ms;
  animation-timing-function: ease-in;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  @keyframes flicker {
    0% {
      transform: rotate(-1deg);
    }
    20% {
      transform: rotate(1deg);
    }
    40% {
      transform: rotate(-1deg);
    }
    60% {
      transform: rotate(1deg) scaleY(1.04);
    }
    80% {
      transform: rotate(-2deg) scaleY(0.92);
    }
    100% {
      transform: rotate(1deg);
    }
  }
`;

const Flame = styled.div`
  bottom: 0;
  position: absolute;
  border-bottom-right-radius: 10%;
  border-bottom-left-radius: 10%;
  border-top-left-radius: 10%;
  transform: rotate(-45deg) scale(1.5, 1.5);
`;

const TYellow = styled(Flame)`
  left: 3px;
  width: 6px;
  height: 6px;
  background: gold;
  box-shadow: 0px 0px 1.8px 0.8px gold;
`;
const TOrange = styled(Flame)`
  left: 2px;
  width: 8px;
  height: 8px;
  background: orange;
  box-shadow: 0px 0px 1.8px 0.8px orange;
  border-top-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const TRed = styled(Flame)`
  left: 1px;
  width: 10px;
  height: 10px;
  background: OrangeRed;
  box-shadow: 0px 0px 1px 0.8px OrangeRed;
  border-top-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;
const TWhite = styled(Flame)`
  left: 3px;
  bottom: -0.8px;
  width: 6px;
  height: 6px;
  background: white;
  box-shadow: 0px 0px 1.8px 0.8px white;
  border-top-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;
const Circle = styled.div`
  border-radius: 10%;
  position: absolute;
`;
const TBlue = styled(Circle)`
  width: 2px;
  height: 2px;
  left: 5px;
  bottom: -5px;
  background: SlateBlue;
  box-shadow: 0px 0px 3px 2px SlateBlue;
  border-top-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;
const TBlack = styled(Circle)`
  width: 8px;
  height: 3px;
  left: 2px;
  bottom: -12px;
  background: black;
  box-shadow: 0px 0px 4px 1px black;
  border-top-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

function Fire() {
  return (
    <Container>
      <TRed />
      <TOrange />
      <TYellow />
      <TWhite />
      <TBlue />
      <TBlack />
    </Container>
  );
}

export default Fire;
