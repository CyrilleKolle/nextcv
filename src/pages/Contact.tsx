import React from "react";
import tw from "twin.macro";
import styled, { css } from "styled-components";
import { Page } from "../components/layout/page";
import InfoBanner from "../components/helper/InfoBanner";
import { PageLayout } from "../components/layout/pagelayout";
const Wrapper = styled.div`
  ${tw`pb-10 flex flex-col justify-center justify-items-center`}
`;

export default function Contact({ cars }) {
  return (
    <PageLayout title="cyrille/contact">
    <Page>
      <Wrapper>
        <InfoBanner />
      </Wrapper>
    </Page>
    </PageLayout>
  );
}
