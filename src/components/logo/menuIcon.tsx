import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const LogoLink = styled.div`
  ${tw`inline-flex items-center p-2 mr-4`}
`;
export const MenuIcon: React.FC = () => {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="white"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
};
