import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

type TagProps = {
  label: String;
  icon?: string;
  alt?: string;
};

const Wrapper = styled.div`
  ${tw`flex place-content-between flex-col`}
`;
const Label = styled.div`
  ${tw`text-gray-100 text-lg p-2 rounded-md`}
  background-color: #535353;
  min-width: 20px;
`;

const SvgItem = styled.img`
  ${tw``}
  width: 30px;
`;

const Tag: React.FC<TagProps> = (props) => {
  return (
    <Wrapper>
      <Label>
        <SvgItem src={props.icon} />
      </Label>
    </Wrapper>
  );
};
export default Tag;
