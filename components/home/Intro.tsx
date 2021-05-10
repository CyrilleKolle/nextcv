import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

const Wrapper = styled.div`
  ${tw`flex flex-row h-full w-full`};
`;
const Title = styled.div`
  ${tw``}
`;
const Description = styled.div`
  ${tw`pt-6 md:p-8 text-center md:text-left text-xs md:(text-xl mx-0 my-0) space-y-4 m-20 lg:text-3xl border-gray-500 leading-relaxed`}
  font-family: Chalkduster, fantasy;
`;
const Image = styled.img`
  ${tw`w-32 h-36 md:(w-48 my-0)md:h-96 mt-32 rounded-xl mx-auto shadow-2xl`}
`;

export default function Intro() {
  return (
    <Wrapper>
      <Image src="/cv.jpg" />
      <Description>
        Att bli programmerare är ett av de bästa besluten jag någonsin har
        tagit. Att ständigt få bli utmanad och hitta nya lösningar, gör att
        jobbet alltid är spännande.Hittills har jag jobbat mycket med frontend
        och backend med hjälp av javascript, även om jag har lärt mig andra
        språk och fortfarande lär mig, och kommer därför att uppskatta chansen
        att lära av dig, medan jag i gengäld kommer med positivitet, entusiasm,
        motivation och naturligtvis allt färdigheter som jag har fått från mina
        studier
      </Description>
    </Wrapper>
  );
}
