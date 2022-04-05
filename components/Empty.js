import React from "react";
import styled from "styled-components";

export default function Empty() {
  return (
    <ComponentContainer>
    </ComponentContainer>
  );
}

const ComponentContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: 650px;
`;