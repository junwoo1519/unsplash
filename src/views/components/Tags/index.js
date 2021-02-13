import React from "react";
import styled from "styled-components";

const Tags = ({tags, limit}) => {

    const limitedTags = tags.splice(0, limit);
    const _tags = limit ? limitedTags : tags;

    return (
        <Container>
            {
                _tags.map((tag, i) => <TagItem key={i}>{tag.title}</TagItem>)
            }
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  margin-top: 10px;

`;

const TagItem = styled.div`
  height: 26px;
  padding: 0 8px;
  color: #767676;
  margin-right: 8px;
  margin-bottom: 8px;
  background-color: #eee;
  font-size: 14px;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  transition: .2s;

  &:hover {
    border: transparent;
    cursor: pointer;
    color: #000;
    background-color: #e3e3e3;

  }
`;

export default Tags;