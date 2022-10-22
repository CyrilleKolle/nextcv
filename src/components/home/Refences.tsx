import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

const Wrapper = styled.div`
  ${tw`w-full`};
  p {
    ${tw`mt-10 text-2xl`};
  }
`;

export default function References() {
  return (
    <Wrapper>
      <p>* Referenser lämnas på begäran</p>
    </Wrapper>
  );
}
