import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import CompentencyCard from "./CompetencyCard";

type CompetencyProps = {
  competencies?: Compentencies[];
};

interface Compentencies {
  label?: string;
  image?: string;
  label2?: string
}

const CompetenciesContainer = styled.div`
${tw`grid grid-cols-2 sm:(grid-flow-col grid-rows-6 grid-cols-3) md:(grid-flow-col grid-rows-5 grid grid-cols-4) lg:(grid-rows-4 grid-cols-5) justify-between`}
`;

const Wrapper = styled.div`
${tw`p-4 gap-4 (md:p-20 -mb-16) content-center justify-between bg-black`}
`;

const Title = styled.p`
${tw`leading-tight tracking-wider text-pinkish text-xl mb-6 mt-10 md:(mb-10 mt-0)`}
font-family: Fantasy;
`;

export const Competencies: React.FC<CompetencyProps> = ({
  competencies,
}: CompetencyProps) => {
  return (
    <Wrapper>
      <Title>Current Areas of Competency</Title>
      <CompetenciesContainer>
        {competencies != undefined ? (
          <>
            {competencies.map((competency) => (
              <CompentencyCard
                image={competency.image}
                label={competency.label}
                label2={competency.label2}
             
              />
            ))}
          </>
        ) : (
          <p>oops no data availaible</p>
        )}
      </CompetenciesContainer>
    </Wrapper>
  );
};
