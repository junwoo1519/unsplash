import React, {useState} from "react";
import styled, {css} from "styled-components";
import {FiSearch} from "react-icons/fi";
import {ImFolderUpload} from "react-icons/all";
import cn from "classnames";

const SearchBox = ({shape}) => {

    const [focus, setFocus] = useState(false);

    const onFocus = () => {
        setFocus(true)
    }

    const onBlur = () => {
        setFocus(false)
    }

    return (
        <Container shape={shape} className={cn("SearchBox", {isFocus: focus})}>
            {/*isFocus란 className을 추가하고 focus값 적용*/}
            <SearchIcon>
                <FiSearch/>
            </SearchIcon>
            <Input type="search"
                   placeholder="Search free high-resolution photos"
                   onFocus={onFocus}
                   onBlur={onBlur}
            />
            <UploadIcon>
                <ImFolderUpload/>
            </UploadIcon>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #eee;
  flex: 1;
  height: 40px;
  border: 1px solid transparent;
  // ex) border-top: 3px solid transparent;
  // border hover효과를 검은색 테두리 생기는걸 방지 해주기위해 처음부터 투명한 border 속성 부여
  transition: .3s;
  
  &:hover {
    border: 1px solid #aaaaaa;
    //ex) border-top: 3px solid #aaaaaa; 적용하려는 border 네임과 속성을 맞춰줘야함
  }

  &.isFocus {
    background-color: #fff;
    border: 1px solid #aaaaaa;
  }

  ${(props) => props.shape === "round" && css`
    -webkit-border-radius: 24px;
    -moz-border-radius: 24px;
    border-radius: 24px;
  `}
`;

const Input = styled.input`
  flex: 1;
  border: none;
  background-color: transparent;
  font-size: 14px;
  font-weight: 400;

  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  height: 38px;
  padding: 0 14px;
  transition: .3s;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;

const UploadIcon = styled(SearchIcon)`

`;

export default SearchBox;