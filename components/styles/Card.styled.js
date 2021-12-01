import styled from "styled-components";

export const Card = styled.div`
  border-radius: 15px;
  height: 400px;
  overflow: hidden;
  background: white;
  box-shadow: 0 8px 10px 5px #00000005;
`;

export const CardBody = styled.div`
  padding: 1.25rem;

  small {
    margin-bottom: 5px;
    display: inline-block;
    background: #ff8a51;
    color: white;
    padding: 3px 10px;
    border-radius: 5px;
  }

  h1 {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 13px;
  }

  p {
      color: #000000a1;
  }
`;
