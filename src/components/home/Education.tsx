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
  ${tw`grid grid-rows-1 grid-cols-2 md:(grid-flow-col grid-cols-4 grid-rows-1 grid) lg:(grid-rows-1) justify-between`}
`;

const Wrapper = styled.div`
  ${tw`mt-20 p-4 gap-4 md:(p-20 mt-0) content-center justify-between bg-black`}
`;

const Title = styled.p`
  ${tw`leading-tight tracking-wider text-pinkish text-xl mb-10`}
  font-family: Fantasy;
`;

export const Education: React.FC<EducationProps> = ({
  schools: schools,
}: EducationProps) => {
  const [viewPortEntered, setViewPortEntered] = useState(false);
  return (
    <Wrapper>
      <Title>Education</Title>
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
