import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

type SquareBoxProps = {
  title?: string;
  description?: string;
  date?: string;
};
const Title = styled.div`
  ${tw`text-3xl font-extralight text-gray-900`}
`;
const Description = styled.div`
  ${tw`text-xl font-extralight text-gray-900`}
`;
const Date = styled.div`
  ${tw`text-xl font-extralight text-gray-900`}
`;

const Wrapper = styled.div`
  ${tw`px-2 bg-gray-500 h-36 w-1/4 rounded-xl flex flex-wrap content-center justify-evenly shadow-2xl shadow-inner font-extralight`}
`;

export const SquareBox: React.FC<SquareBoxProps> = ({
  title,
  description,
  date,
}) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <br />
      <Description>{description}</Description>
      <br />
      <Date>{date}</Date>
    </Wrapper>
  );
};
