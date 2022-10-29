import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import CompentencyCard from "./CompetencyCard";

type CompetencyProps = {
  competencies?: Compentencies[];
};

interface Compentencies {
  label: string;
  description: string;
  image: string;
}

const CompetenciesContainer = styled.div`
${tw`grid grid-rows-1 md:(grid-flow-col grid-rows-2 grid) lg:(grid-rows-1) justify-between`}
`;

const Wrapper = styled.div`
${tw`p-4 gap-4 md:p-20 content-center justify-between bg-black`}
`;

const Title = styled.p`
${tw`leading-tight tracking-wider text-pinkish text-xl mb-10`}
font-family: Fantasy;
`;
const Description = styled.p`
  ${tw`text-white mt-10 text-lg`}
`;
export const Competencies: React.FC<CompetencyProps> = ({
  competencies,
}: CompetencyProps) => {
  return (
    <Wrapper>
      <Title>Current Areas of Competency</Title>
      <Description>
        These are some of the work experiences I have gathered over the years
        the last few years
      </Description>
      <CompetenciesContainer>
        {competencies != undefined ? (
          <>
            {competencies.map((competency) => (
              <CompentencyCard
                image={competency.image}
                label={competency.label}
                description={competency.description}
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
