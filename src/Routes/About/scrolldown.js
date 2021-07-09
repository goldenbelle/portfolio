const Arrow = styled.div`
  width: 100px;
  height: 100px;
  margin: 30px;
  position: fixed;
  bottom: 0px;
  display: flex;
  justify-content: center;
`;

const Move = keyframes`
  25% {
    opacity: 1;

  }
  33% {
    opacity: 1;
    transform: translateY(30px);
  }
  67% {
    opacity: 1;
    transform: translateY(40px);
  }
  100% {
    opacity: 0;
    transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
  }`;

const Pulse = keyframes`
  to {
    opacity: 1;
  }
`;

const Chevron = styled.div`
  position: absolute;
  width: 28px;
  height: 8px;
  opacity: 0;
  transform: scale3d(0.5, 0.5, 0.5);
  animation: ${Move} 3s ease-out infinite;
  &:nth-child(1) {
    animation: ${Move} 3s ease-out 1s infinite;
  }
  &:nth-child(2) {
    animation: ${Move} 3s ease-out 2s infinite;
  }

  &:before {
    left: 0;
    transform: skew(0deg, 30deg);
    content: " ";
    position: absolute;
    top: 0;
    height: 100%;
    width: 51%;
    background: #fff;
  }

  &:after {
    right: 0;
    width: 50%;
    transform: skew(0deg, -30deg);
    content: " ";
    position: absolute;
    top: 0;
    height: 100%;
    width: 51%;
    background: #fff;
  }
`;

const Text = styled.span`
  display: block;
  margin-top: 70px;
  font-size: 12px;
  color: black;
  text-transform: uppercase;
  white-space: nowrap;
  opacity: 0.25;
  animation: ${Pulse} 2s linear alternate infinite;
`;

<Arrow>
  <Chevron></Chevron>
  <Chevron></Chevron>
  <Chevron></Chevron>
  <Text>Scroll Down</Text>
</Arrow>;
