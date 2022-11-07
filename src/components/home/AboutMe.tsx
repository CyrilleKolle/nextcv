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
  ${tw`flex flex-col md:flex-row`}
`;

const Wrapper = styled.div`
  ${tw`grid grid-rows-1 grid-flow-col bg-black`}
`;

const TextWrapper = styled.div`
  ${tw`p-4 gap-4 md:p-20 content-center justify-between`}
`;

const Title = styled.p`
  ${tw`leading-tight tracking-wider text-pinkish text-xl mb-10`}
  font-family: Fantasy;
`;
const Description = styled.p`
  ${tw`text-white mt-10 text-lg`}
`;
export const AboutMe: React.FC<CompetencyProps> = ({
  competencies,
}: CompetencyProps) => {
  return (
    <Wrapper>
      <TextWrapper>
        <Title>About Me</Title>
        <Description>
          This is the area about me. hdhdh djdnjndjn djndjndhd jnskbc jhsdfbjbsd
          hbyuasdjs djbdsugyd jbsugsd uysbjsad jhvuaaj
        </Description>
      </TextWrapper>
      <TextWrapper>
        <Description>litle game here maybe? some data visualization too ?</Description>
      </TextWrapper>
    </Wrapper>
  );
};
