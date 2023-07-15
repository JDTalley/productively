'use client';
import React from 'react';
import styled from 'styled-components';

const PrimaryButton = styled.button`
  color: white;
  background-color: hsl(205, 62%, 49%);
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  margin: 2px;

  &:hover {
    background-color: hsl(205, 62%, 59%);
  }

  &:active {
    background-color: hsl(205, 62%, 49%);
  }
`;

const DangerButton = styled.button`
  color: white;
  background-color: hsl(1, 45%, 52%);
  padding: 10px 10px;
  border: none;
  border-radius: 5px;
  margin: 2px;

  &:hover {
    background-color: hsl(1, 45%, 62%);
  }

  &:active {
    background-color: hsl(1, 45%, 52%);
  }
`;

function Button({ name, children, onClick, style }) {
  switch (style) {
    case 'primary':
      return (
        <PrimaryButton name={name} onClick={onClick}>
          {children}
        </PrimaryButton>
      );
    case 'danger':
      return (
        <DangerButton name={name} onClick={onClick}>
          {children}
        </DangerButton>
      );
    default:
      return (
        <PrimaryButton name={name} onClick={onClick}>
          {children}
        </PrimaryButton>
      );
  }
}

export default Button;
