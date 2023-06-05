import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  color: ${(props) => props.theme.colors.primary.contrast};
  background-color: ${(props) => props.theme.colors.primary.light};
  padding: 10px 10px;
  border: 2px solid ${(props) => props.theme.colors.grayscale.contrast};
  border-radius: 5px;
  margin: 2px;

  &:hover {
    border: 2px solid ${(props) => props.theme.colors.grayscale.light};
  }

  &:active {
    background-color: ${(props) => props.theme.colors.primary.main};
  }
`;

function Button({ name, children, onClick }) {
  return (
    <StyledButton name={name} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default Button;
