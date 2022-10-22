import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

type TitleProps = {
  title?: string;
};
const TitleWrapper = styled.div`
  ${tw`text-gray-700 text-6xl`}
  font-family: Jazz LET, fantasy;
`;
export const Title: React.FC<TitleProps> = ({ title }) => {
  return <TitleWrapper>{title}</TitleWrapper>;
};
