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
    <Page>
      <Wrapper>
        <Intro />
        <Divider />
        <MainItemContainer>
          <Title title="Utbildningar" />
          <SquareBoxWrapper>
            <SquareBox
              title="It-Högskolan"
              description="Göteborg"
              date="2019 - 2021"
            />
            <SquareBox
              title="Bachelor in"
              description="Accounting"
              date=" 2008-2011"
            />
            <SquareBox
              title="Highschool"
              description="Certificate"
              date=" 2006-2008"
            />
          </SquareBoxWrapper>
        </MainItemContainer>
        <Divider />
        <MainItemContainer>
          <Title title="Arbetslivefarenhet" />
          <WorkExperience>
            <Jobs />
          </WorkExperience>
        </MainItemContainer>
        <Divider />
        <MainItemContainer>
          <Title title="Competencies" />
          <CompetencyWrapper>
            <Competencies
              competencies={[
                "Javascript",
                "Java",
                "React",
                "Typescript",
                "Swift",
                "Objective-C",
              ]}
            />
            <Competencies
              competencies={[
                "SQL",
                "Figma",
                "Next js",
                "Tailwind",
                "Styled Components",
                "git",
              ]}
            />
            <Competencies
              competencies={[
                "Terminal",
                "Android Studio",
                "Xcode",
                "Firebase",
                "HTML",
                "CSS",
              ]}
            />
            <Competencies
              competencies={[
                "React-native",
                "Vue.js",
                "Agile methodologies",
                "Kanban",
                "Scrum",
                "Project Management",
              ]}
            />
          </CompetencyWrapper>
        </MainItemContainer>
        <Divider />
        <MainItemContainer>
          <Title title="Språk Kunskap" />
          <SquareBoxWrapper>
            <Language
              title="Engelska"
              write="Flytande"
              speak="Flytande"
              starValue2={5}
            />
            <Language
              title="Franska"
              write="Flytande"
              speak="Väldigt bra"
              starValue2={4.5}
            />
            <Language
              title="Svenska"
              write="Väldigt bra"
              speak="Väldigt bra"
              starValue2={4}
            />
          </SquareBoxWrapper>
        </MainItemContainer>
        <Divider />
        <MainItemContainer>
          <Title title="Referencer" />
          <References />
        </MainItemContainer>
      </Wrapper>
    </Page>
  );
}
