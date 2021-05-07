import styled from "styled-components";

export const DivStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`;

export const LabelStyle = styled.label`
  padding-bottom: 0.3em;
`;

export const InputStyle = styled.input`
  border-radius: 20px;
  height: 40px;
  width: 200px;
  text-align: center;
  &:focus {
    outline: none;
  }
`;
