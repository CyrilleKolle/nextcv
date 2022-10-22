import React from "react";
import tw from "twin.macro";
import styled, { css } from "styled-components";
import {Page } from "../components/layout/page";
import {PageLayout} from "../components/layout/pagelayout";

const Wrapper = styled.div`
  ${tw`pb-40`}
`;
const SquareBoxWrapper = styled.div`
  ${tw`flex flex-row justify-between mt-20`}
`;
const WorkExperience = styled.div`
  ${tw`my-20`}
`;
const CompetencyWrapper = styled.div`
  ${tw`flex flex-wrap md:flex-row justify-between my-20`}
`;
const MainItemContainer = styled.div`
  ${tw`flex flex-col`}
`;
export default function Home({ cars }) {
  return (
    <PageLayout title="Cyrille - Lia CV">
      <Page></Page>
    </PageLayout>
  );
}
