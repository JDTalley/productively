'use client';
import styled from 'styled-components';

/**
 * CircleProgressBar
 * @prop percentComplete
 */
const CircleProgressBar = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background: radial-gradient(closest-side, white 79%, transparent 80% 100%),
    conic-gradient(
      hsl(205, 62%, 49%) ${(props) => props.$progress + '%'},
      hsl(205, 0%, 55%) 0
    );
`;

export default CircleProgressBar;
