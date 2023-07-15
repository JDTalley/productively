'use client';
import styled from 'styled-components';

/**
 * ProgressBar
 * @prop percentComplete
 */
const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: linear-gradient(
    to right,
    hsl(205, 62%, 49%) ${(props) => props.$progress + '%'},
    hsl(205, 0%, 55%) 0
  );
`;

export default ProgressBar;
