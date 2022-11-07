import tw from "twin.macro";
import styled from "styled-components";

type SvgLayoutProps = {
  svg?: string;
  alt?: string;
  href?: string;

};

const Svg = styled.img`
  ${tw`rounded-md m-0`}
  height: 40px;
  width: 40px;
`;
const SvgButton = styled.a`

`

export const SvgLayout: React.FC<SvgLayoutProps> = (props) => {
  return (
    <SvgButton>
      <Svg src={props.svg} alt={props.alt} />
    </SvgButton>
  );
};
