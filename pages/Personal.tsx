import React from "react";
import tw from "twin.macro";
import styled, { css } from "styled-components";
import { Page } from "../components/layout/page";
import Intro from "../components/home/Intro";
import { SquareBox } from "../components/home/SquareBox";
import Jobs from "../components/home/Jobs";
import { Competencies } from "../components/home/Competencies";
import Divider from "../components/layout/Divider";
import Language from "../components/home/Language";
import { Title } from "../components/layout/Title";
import References from "../components/home/Refences";
import {Letter} from '../components/contact/Letter'

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
  ${tw`flex lg:flex-row flex-col justify-between my-20`}
`;
const MainItemContainer = styled.div`
  ${tw`flex flex-col`}
`;
export default function Personal() {
  return (
    <Page>
      <Wrapper>
        <Letter/>
      </Wrapper>
      
    </Page>
  );
}
