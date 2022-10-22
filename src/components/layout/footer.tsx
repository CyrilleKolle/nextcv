import styled from "styled-components";
import tw from "twin.macro";
import { Address, Services, SocialIcons } from "../footer";

const FooterWrapper = styled.div`
  ${tw`flex flex-row justify-between content-center flex-wrap px-20 py-5`}
  background-color: rgb(0, 0, 0, 0.5);
`;
function Footer() {
  return (
    <>
      <FooterWrapper>
        <Address />
        <SocialIcons />
        {/* <Services /> */}
      </FooterWrapper>
    </>
  );
}

export default Footer;
