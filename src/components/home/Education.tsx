import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import EducationCard from "./EducationCard";

type EducationProps = {
  schools?: Schools[];
};

interface Schools {
  number?: string;
  title?: string;
  description?: string;
  location?: string;
}

const CompetenciesContainer = styled.div`
  ${tw`grid grid-rows-1 md:(grid-flow-col grid-rows-1 grid) lg:(grid-rows-1) justify-between`}
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

export const Education: React.FC<EducationProps> = ({
  schools: schools,
}: EducationProps) => {
  const [viewPortEntered, setViewPortEntered] = useState(false);
  return (
    <Wrapper>
      <Title>Education</Title>
      <Description>
        Schools and education so far over the years
      </Description>
      <CompetenciesContainer>
        {schools != undefined ? (
          <>
            {schools.map((school) => (
              <EducationCard
                number={school.number}
                location={school.location}
                title={school.title}
                description={school.description}
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
