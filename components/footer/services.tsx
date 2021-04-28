import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

const ServicesWrapper = styled.div`
  ${tw`flex flex-col p-2`}
`;

export const Services: React.FC = () => {
  return <ServicesWrapper></ServicesWrapper>;
};
