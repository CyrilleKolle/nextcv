import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

const AddressWrapper = styled.div`
  ${tw`flex flex-col p-4 text-right`}
`;
const Name = styled.div`
  ${tw`text-3xl text-left underline text-gray-900`}
  font-family: Address Sans Pro Xt Thin;
  text-shadow: 1.5px 1.5px #606060;
`;
const Telephone = styled.div`
  ${tw`text-2xl text-left my-2 underline text-gray-900`}
  font-family: Address Sans Pro Xt Thin;
  text-shadow: 1px 2px #616060;
`;
const HomeAddress = styled.div`
  ${tw`text-xl text-left text-gray-200`}
  font-family: Address Sans Pro Xt Thin;
`;

export const Address: React.FC = () => {
  return (
    <AddressWrapper>
      <Name>Cyrille Ngide Kolle</Name>
      <Telephone>+46 737 668 228</Telephone>
    </AddressWrapper>
  );
};
