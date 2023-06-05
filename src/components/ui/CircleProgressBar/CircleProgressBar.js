import styled from "styled-components";

const CircleProgress = styled.div`
  padding: 25px;
  border-radius: 50%;
  max-width: 30px;
  margin: 5px auto;
  background: radial-gradient(closest-side, white 79%, transparent 80% 100%),
    conic-gradient(
      ${(props) => props.theme.colors.primary.main}
        ${(props) => props.progress + "%"},
      grey 0
    );
`;

function CircleProgressBar({ percentComplete }) {
  return <CircleProgress progress={percentComplete} />;
}

export default CircleProgressBar;
