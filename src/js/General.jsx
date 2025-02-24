import styled from "styled-components";
import DataSection from "./DataSection";
import PZ from "./PZ";
import { useState } from "react";

const MainContainer = styled.div`
  background-color: #000;
  height: 100vh;
  display: grid;
  grid-template-columns: 55% 45%;
`;
const DataSectionContainer = styled.div`
  background-color: #ffffff;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 0.5rem;
  padding: 0.4rem;
`;

function General() {
  const [pvt_data, setPvtData] = useState({
    test1: {
      pressure: [],
      zfactor: [],
      production: [],
      valid: false,
    },
    test2: {
      pressure: [],
      zfactor: [],
      production: [],
      valid: false,
    },
    test3: {
      pressure: [],
      zfactor: [],
      production: [],
      valid: false,
    },
  });

  return (
    <MainContainer>
      <DataSectionContainer>
        <DataSection
          id={1}
          type="test1"
          pvt_data={pvt_data}
          setPvtData={setPvtData}
        ></DataSection>
        <DataSection
          id={2}
          type="test2"
          pvt_data={pvt_data}
          setPvtData={setPvtData}
        ></DataSection>
        <DataSection
          id={3}
          type="test3"
          pvt_data={pvt_data}
          setPvtData={setPvtData}
        ></DataSection>
      </DataSectionContainer>
      <PZ pvt_data={pvt_data}></PZ>
    </MainContainer>
  );
}

export default General;
