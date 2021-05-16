import styled from "styled-components";

export const ContainerMedia = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 5px;
  margin: 5px;
  background-color: #282c34;
  border-radius: 10px;
  position: relative;
  font-family: "Roboto";

  &:hover {
    background-color: white;
    color: black;

    @media (max-width: 550px) {
      width: 46%;
    }
  }
`;

export const Poster = styled.img`
  border-radius: 10px;
`;

export const Title = styled.b`
  width: 100%;
  text-align: center;
  font-size: 16px;
  padding: 8px 0;
  color: #f27326;
`;

export const Subtitle = styled.span`
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  padding: 0 2px;
  padding-bottom: 3px;
`;
