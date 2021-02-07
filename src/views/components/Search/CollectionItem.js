import React from "react";
import styled from "styled-components";

const CollectionItem = (props) => {

    const {
        links,
        cover_photo
    } = props;

    return (
        <Container>
            <img src={cover_photo.urls.regular} alt=""/>
        </Container>
    )
}

const Container = styled.div`

`;

export default CollectionItem;