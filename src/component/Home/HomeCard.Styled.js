import styled from "styled-components";

export const HomeCardStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 40px;
  padding: 10px;
  margin-right: 5px;
  font-size: 20px;
  background-color: #fff;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  transition: .3s;
  cursor: pointer;
  opacity: .8;

  &:hover {
    opacity: 1;
  }
`;