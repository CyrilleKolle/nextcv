import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {Facebook} from "../logo/facebook"

type CompetencyCardProps = {
  image?: string;
  label?: string;
  description?: string;
};

const CompetencyCardContainer = styled.div`
  ${tw`flex flex-row md:flex-col text-center content-center `}
`;
const Label = styled.p`
  ${tw``}
`;
const CompetencySvg = styled.svg`
  ${tw``}
`;
const Description = styled.p`
  ${tw``}
`;

const CompetencyCard: React.FC<CompetencyCardProps> = ({
  image,
  label,
  description,
}) => {
  return (
    <CompetencyCardContainer>
      <Facebook/>
      <Label>{label}</Label>
      <Description >{description}</Description>
    </CompetencyCardContainer>
  );
};
export default CompetencyCard