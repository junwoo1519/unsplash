import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  &:hover {
    .View {
      display: block;
      background-color: rgb(0, 0, 0, .1);
      opacity: 1;
    }
  }
`;

export const Thumb = styled.div`

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const View = styled.div`
  position: absolute;
  transition: .2s;
  opacity: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const Desc = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0,), rgba(0, 0, 0, .23) 100%);
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 10px;
  padding: 16px;
`;

export const Avatar = styled.div`
  margin-right: 10px;

  img {
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }
`;

export const Info = styled.div`
  text-transform: capitalize;
  font-size: 15px;
  font-weight: 500;
  color: #e5e5e5;
  cursor: pointer;
  transition: .3s;

  &:hover {
    color: #fff;
  }
`;

export const Add = styled.div`
  display: flex;
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const PhotoItemStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 40px;
  padding: 10px;
  margin-right: 5px;
  font-size: 20px;
  background-color: #fff;
  border-radius: 5px;
  transition: .3s;
  cursor: pointer;
  opacity: .8;

  &:hover {
    opacity: 1;
  }
`;

export const Likes = styled(PhotoItemStyled)`

`;

export const Collection = styled(PhotoItemStyled)`

`;

export const Download = styled(PhotoItemStyled)`
  position: absolute;
  bottom: 27px;
  right: 15px;

`;