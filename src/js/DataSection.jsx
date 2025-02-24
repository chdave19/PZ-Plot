import styled from "styled-components";
import { useEffect, useRef } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

const Container = styled.section`
  background-color: #4a4444;
  display: grid;
  grid-template-rows: 15% 85%;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #44443c;
  align-items: center;
  padding-inline: 0.4rem;
`;
const InputContainer = styled.main`
  display: flex;
  flex-direction: column;
  background-color: #717177;
  justify-content: space-evenly;
  padding-inline: 0.4rem;
`;
const InputSection = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  background-color: #e89f9f;
  gap: 2.6rem;
  padding-block: 0.6rem;
  padding-inline: 0.4rem;
  color: #000000;
  font-weight: bold;
`;

const InputWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #c1c1c1;
  padding-block: 1rem;
  padding-inline: 0.2rem;
  border: 3px solid #4f4d4d;
`;

const Input = styled.input`
  width: 50px;
  outline: none;
`;
const Button = styled.button`
  cursor: pointer;
  padding: 0.2rem;
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  gap: 0.5rem;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
const Text = styled.h4`
  color: #fff;
`;
const ButtonSection = styled.section`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

function DataSection({ id, type, pvt_data, setPvtData }) {
  const pressureRef = useRef({});
  const zRef = useRef({});
  const productionRef = useRef({});

  const gatherData = () => {
    setPvtData(prev=>({...prev, [type]: {
        pressure: [
          pressureRef.current.p1.value,
          pressureRef.current.p2.value,
          pressureRef.current.p3.value,
          pressureRef.current.p4.value,
          pressureRef.current.p5.value,
        ],
        zfactor: [
          zRef.current.z1.value,
          zRef.current.z2.value,
          zRef.current.z3.value,
          zRef.current.z4.value,
          zRef.current.z5.value,
        ],
        production: [
          productionRef.current.p1.value,
          productionRef.current.p2.value,
          productionRef.current.p3.value,
          productionRef.current.p4.value,
          productionRef.current.p5.value,
        ],
        valid: true,
      }}));
      
  };

  useEffect(() => {}, []);

  return (
    <Container>
      <Header>
        <Text>Test {id}</Text>
        <ButtonSection>
          <Button>
            <span>Clear Field</span> <RiDeleteBin5Line />
          </Button>
          <Button
            onClick={() => {
              gatherData();
            }}
          >
            Plot P/Z
          </Button>
        </ButtonSection>
      </Header>
      <InputContainer>
        <InputSection>
          <InputWrapper>
            <label>P1 (psia)</label>
            <Input
              ref={(el) => (pressureRef.current.p1 = el)}
              type="number"
            ></Input>
          </InputWrapper>
          <InputWrapper>
            <label>P2 (psia)</label>
            <Input
              ref={(el) => (pressureRef.current.p2 = el)}
              type="number"
            ></Input>
          </InputWrapper>
          <InputWrapper>
            <label>P3 (psia)</label>
            <Input
              ref={(el) => (pressureRef.current.p3 = el)}
              type="number"
            ></Input>
          </InputWrapper>
          <InputWrapper>
            <label>P4 (psia)</label>
            <Input
              ref={(el) => (pressureRef.current.p4 = el)}
              type="number"
            ></Input>
          </InputWrapper>
          <InputWrapper>
            <label>P5 (psia)</label>
            <Input
              ref={(el) => (pressureRef.current.p5 = el)}
              type="number"
            ></Input>
          </InputWrapper>
        </InputSection>

        <InputSection>
          <InputWrapper>
            <label>Z factor_1</label>
            <Input ref={(el) => (zRef.current.z1 = el)} type="number"></Input>
          </InputWrapper>
          <InputWrapper>
            <label>Z factor_2</label>
            <Input ref={(el) => (zRef.current.z2 = el)} type="number"></Input>
          </InputWrapper>
          <InputWrapper>
            <label>Z factor_3</label>
            <Input ref={(el) => (zRef.current.z3 = el)} type="number"></Input>
          </InputWrapper>
          <InputWrapper>
            <label>Z factor_4</label>
            <Input ref={(el) => (zRef.current.z4 = el)} type="number"></Input>
          </InputWrapper>
          <InputWrapper>
            <label>Z factor_5</label>
            <Input ref={(el) => (zRef.current.z5 = el)} type="number"></Input>
          </InputWrapper>
        </InputSection>

        <InputSection>
          <InputWrapper>
            <label>Prod_1</label>
            <Input
              ref={(el) => (productionRef.current.p1 = el)}
              type="number"
            ></Input>
          </InputWrapper>
          <InputWrapper>
            <label>Prod_2</label>
            <Input
              ref={(el) => (productionRef.current.p2 = el)}
              type="number"
            ></Input>
          </InputWrapper>
          <InputWrapper>
            <label>Prod_3</label>
            <Input
              ref={(el) => (productionRef.current.p3 = el)}
              type="number"
            ></Input>
          </InputWrapper>
          <InputWrapper>
            <label>Prod_4</label>
            <Input
              ref={(el) => (productionRef.current.p4 = el)}
              type="number"
            ></Input>
          </InputWrapper>
          <InputWrapper>
            <label>Prod_5</label>
            <Input
              ref={(el) => (productionRef.current.p5 = el)}
              type="number"
            ></Input>
          </InputWrapper>
        </InputSection>
      </InputContainer>
    </Container>
  );
}

export default DataSection;
