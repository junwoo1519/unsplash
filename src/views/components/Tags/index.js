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

`;

const TagItem = styled.div`

`;

export default Tags;