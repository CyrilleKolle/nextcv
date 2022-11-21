import React from "react";
import tw from "twin.macro";
import styled, { css } from "styled-components";
import { Page } from "../components/layout/page";
import { PageLayout } from "../components/layout/pagelayout";
import InfoBanner from "../components/helper/InfoBanner";
const Wrapper = styled.div`
  ${tw`pb-40`}
`;

export default function Personal() {
  return (
    <PageLayout title="cyrille/portfolio">
      <Page>
        <Wrapper>
          <InfoBanner />
        </Wrapper>
      </Page>
    </PageLayout>
  );
}
