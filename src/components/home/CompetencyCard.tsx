import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import {SvgLayout} from "../layout/SvgLayout"

type CompetencyCardProps = {
  image?: string;
  label?: string;
};

const CompetencyCardContainer = styled.div`
  ${tw`flex flex-row md:flex-col justify-center content-center my-5`};
`;
const Label = styled.p`
  ${tw`text-coal`};
`;
const CompetencySvg = styled.svg`
  ${tw``};
`;
const Description = styled.p`
  ${tw``};
`;

const CompetencyCard: React.FC<CompetencyCardProps> = ({
  image,
  label,
}) => {
  return (
    <CompetencyCardContainer>
      <SvgLayout svg={image}/>
      <Label>{label}</Label>
    </CompetencyCardContainer>
  );
};
export default CompetencyCard