import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Title } from "../layout/Title";

type CompetencyProps = {
  competencies?: string[];
};
const Competency = styled.div`
  ${tw`bg-gray-500 text-gray-900 mb-4 text-lg h-12 rounded-lg shadow-2xl content-center font-extralight flex flex-wrap`}
  min-width: 300px;
  p {
    ${tw`mx-auto p-2`}
  }
`;
const CompetenciesContainer = styled.div`
  ${tw`flex flex-row md:flex-col text-center content-center`}
`;

const Wrapper = styled.div`
  ${tw`px-2 rounded-xl content-center justify-evenly `}
`;

export const Competencies: React.FC<CompetencyProps> = ({ competencies }) => {
  return (
    <Wrapper>
      <CompetenciesContainer>
        {competencies.map((competency) => (
          <Competency>
            <p>{competency}</p>
          </Competency>
        ))}
      </CompetenciesContainer>
    </Wrapper>
  );
};
