import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import ExperienceCard from "./ExperienceCard";

type Experience = {
  image: string;
  label: string;
  startYear: number | string;
  endYear: number | string;
  location: string;
  position: string;
};

type Props = {
  experiences: Experience[];
};

const CompetenciesContainer = styled.div`
  ${tw`grid grid-rows-1 gap-6 md:(grid-flow-col grid-rows-2 grid) lg:(grid-flow-col grid-rows-1) justify-between`}
`;

const Wrapper = styled.div`
  ${tw`p-4 gap-4 (md:p-20 -mb-16) content-center justify-between bg-black`}
`;

const Title = styled.p`
  ${tw`leading-tight tracking-wider text-pinkish text-xl mb-10`}
  font-family: Fantasy;
`;
const Description = styled.p`
  ${tw`text-white mt-10 text-lg`}
`;
export const Experiences: React.FC<Props> = ({ experiences }: Props) => {
  return (
    <Wrapper>
      <Title>Work Experience</Title>
{/*       <Description>
        These are some of the work experiences I have gathered over the years
        the last few years
      </Description> */}
      <CompetenciesContainer>
        {experiences != undefined ? (
          <>
            {experiences.map((exp) => (
              <ExperienceCard
                image={exp.image}
                label={exp.label}
                startYear={exp.startYear}
                endYear={exp.endYear}
                location={exp.location}
                position={exp.position}
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
