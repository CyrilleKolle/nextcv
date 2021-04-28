import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Page } from "../components/layout";

const Wrapper = styled.div`
  ${tw` mx-4 md:my-10 md:mx-10`}
  margin-top: 100px;
`;

export default function Home({ cars }) {
  return (
    <Page>
      <Wrapper>{/* <Filter /> */}</Wrapper>
    </Page>
  );
}
