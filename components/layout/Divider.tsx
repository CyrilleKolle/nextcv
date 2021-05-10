import styled from "styled-components";
import tw from "twin.macro";

const Line = styled.div`
  ${tw`h-1 w-full mx-auto my-20`}
  background-color: rgb(0, 0, 0, 0.1)
`;
function Divider() {
  return <Line />;
}

export default Divider;
