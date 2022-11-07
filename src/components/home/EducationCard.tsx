import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

type EducationCardProps = {
  number?: string;
  title?: string;
  description?: string;
  location?: string;
};

const EducationCardContainer = styled.div`
  ${tw`flex flex-row md:flex-col justify-center content-center my-5`};
`;
const Title = styled.p`
  ${tw`text-coal`};
`;
const Description = styled.p`
  ${tw`text-white`};
`;
const Number = styled.p`
  ${tw`text-white`};
`;
const Location = styled.p`
  ${tw`text-white`}
`;
const EducationCard: React.FC<EducationCardProps> = ({
  number,
  title,
  description,
  location,
}) => {
  return (
    <EducationCardContainer>
      <Number>{number}</Number>
      <Title>{title}</Title>
      <Location>{location}</Location>
      <Description>{description}</Description>
    </EducationCardContainer>
  );
};
export default EducationCard;
