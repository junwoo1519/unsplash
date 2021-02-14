import React, {useState} from "react";
import styled from "styled-components";
import {FiSearch} from "react-icons/fi";
import {ImFolderUpload} from "react-icons/all";
import cn from "classnames";
import {useHistory} from "react-router-dom";

const SearchBox = ({shape}) => {

    const [focus, setFocus] = useState(false);

    const onFocus = () => {
        setFocus(true)
    }

    const onBlur = () => {
        setFocus(false)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        history.push(`/search/photos/${query}`)
    }

    const history = useHistory();

    const [query, setQuery] = useState("")

    const onChange = (event) => {
        setQuery(event.target.value)
    }

    return (
        <Container className={cn("SearchBox", {isFocus: focus}, shape)}>
            {/*isFocus란 className을 추가하고 focus값 적용*/}
            <Form onSubmit={onSubmit}>
                <SearchIcon onClick={onSubmit}>
                    <FiSearch/>
                </SearchIcon>
                <Input type="search"
                       placeholder="Index free high-resolution photos"
                       value={query}
                       onChange={onChange}
                       onFocus={onFocus}
                       onBlur={onBlur}
                />
                <UploadIcon>
                    <ImFolderUpload/>
                </UploadIcon>
            </Form>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #eee;
  flex: 1;
  height: 40px;
  transition: .3s;
  color: #767676;

  &.round {
    border-radius: 24px;
    border: 1px solid transparent;
    // ex) border-top: 3px solid transparent;
    // border hover효과를 검은색 테두리 생기는걸 방지 해주기위해 처음부터 투명한 border 속성 부여

    &:hover {
      border-color:#aaa;
    }

    &.isFocus {
      background-color: #fff;
      border: 1px solid #aaaaaa;
    }
  }

  &.square {
    border-radius: 5px;
    height: 54px;
    outline: none;
    box-shadow: 0 0 5px 5px rgba(0, 0, 0, .3);

    &:hover {
      box-shadow: 0 0 5px 5px rgba(0, 0, 0, .4);
    }

    &.isFocus {
      background-color: #fff;
      box-shadow: 0 0 5px 5px rgba(0, 0, 0, .6);
    }
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  flex: 1;
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