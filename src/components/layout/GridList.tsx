import React, { ReactNode } from "react";
import tw from "twin.macro";
import styled from "styled-components";

type GridListProps = {
  title: String;
  children: ReactNode
};

const Wrapper = styled.div`
  ${tw`flex flex-col overflow-auto mb-24 border-l-2 p-4 rounded`}
  border-color: #252525;
`;
const InnerWrapper = styled.div`
  ${tw`flex flex-col place-content-between w-full overflow-auto grid grid-rows-2 grid-flow-col gap-2 py-8`}
`;

const Title = styled.p`
  ${tw`text-green-500 text-2xl hover:text-gray-100`}
`;
const TitleWrapper = styled.div`
  ${tw`flex flex-row place-content-between`}
`;
const MoreInfo = styled.button`
  ${tw`text-base text-gray-100`}
`;

const GridList: React.FC<GridListProps> = (props) => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>{props.title}</Title>
        <MoreInfo>More...</MoreInfo>
      </TitleWrapper>
      <InnerWrapper>{props.children}</InnerWrapper>
    </Wrapper>
  );
};
export default GridList;
