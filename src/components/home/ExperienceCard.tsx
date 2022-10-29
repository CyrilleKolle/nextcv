import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

type Experience = {
  image: string;
  label: string;
  startYear: number | string;
  endYear: number | string;
  location: string;
  position: string;
};

const CompetencyCardContainer = styled.div`
  ${tw`rounded overflow-hidden shadow-xl bg-white p-10 flex justify-between flex-col`}
  font-family: Fantasy;
`;
const Label = styled.p`
  ${tw`text-black font-bold text-xl mb-2 p-2 leading-tight tracking-wider font-thin`}
  font-family: Fantasy;
`;
const YearWrapper = styled.div`
  ${tw`flex flex-row`}
`;
const Year = styled.p`
  ${tw`text-black p-2 leading-tight tracking-wider font-thin`}
  font-family: Fantasy;
`;
const Text = styled.p`
  ${tw`p-2 leading-tight font-thin tracking-wider text-black inline-block bg-gray-200 rounded-full px-3 py-1 text-sm mr-2 mb-2`}
  font-family: Fantasy;
`;
const Image = styled.img`
  ${tw`w-full lg:w-56`}
`;
const TextWrapper = styled.div`
  ${tw``}
`;
const CompetencyCard: React.FC<Experience> = ({
  image,
  label,
  startYear,
  endYear,
  location,
  position,
}) => {
  return (
    <CompetencyCardContainer>
      <Image src={image} />
      <TextWrapper>
        <Label>{label}</Label>
        <YearWrapper>
          <Year>{startYear}</Year>
          <Year>{"-"}</Year>
          <Year>{endYear}</Year>
        </YearWrapper>
        <Text>{position}</Text>
        <Text>{location}</Text>
      </TextWrapper>
    </CompetencyCardContainer>
  );
};
export default CompetencyCard;
