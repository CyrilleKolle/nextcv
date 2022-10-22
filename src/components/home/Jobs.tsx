import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { Title } from "../layout/Title";

const Wrapper = styled.div`
  ${tw`justify-between shadow-2xl rounded-lg border-2 border-gray-500`}
`;
const Table = styled.table`
  ${tw`table-auto border-none w-full rounded-lg shadow-xl border-2`}
`;

const TableD = styled.td`
  ${tw`w-1/2 rounded-lg py-10 px-14 text-3xl border-t-4 border-gray-200 font-extralight font-serif`}
`;
const TableD1 = styled.td`
  ${tw`w-1/2 rounded-lg py-10 px-14 text-3xl font-extralight font-serif`}
`;

const TableH = styled.th`
  ${tw`rounded-lg`}
`;
function Jobs() {
  return (
    <>
      <Wrapper>
        <Table>
          <thead className="text-gray-400">
            <tr className="">
              <TableH className="w-1/2 rounded-l-lg"></TableH>
              <TableH className="w-1/2 rounded-l-lg"></TableH>
            </tr>
          </thead>
          <tbody>
            <tr className=" text-gray-600 rounded-lg w-1/2 border-t-0">
              <TableD1>Itiden AB (praktikant)</TableD1>
              <TableD1>Feb 2021 - Jun 2021</TableD1>
            </tr>
            <tr className=" text-gray-600 rounded-lg w-1/2">
              <TableD>Dagab</TableD>
              <TableD>2020 - pågående</TableD>
            </tr>
            <tr className="text-gray-600 rounded-lg w-1/2">
              <TableD>Frode Laursen</TableD>
              <TableD>2018- 2020</TableD>
            </tr>
            <tr className=" text-gray-600 rounded-lg items-center">
              <TableD>Postnord terminalen</TableD>
              <TableD>2018-2018</TableD>
            </tr>
          </tbody>
        </Table>
      </Wrapper>
    </>
  );
}

export default Jobs;
