import React from "react";
import styled from "styled-components";
import PhotoContainer from "../../components/containers/PhotoContainer";
import CollectionRelatedContainer from "../../components/containers/CollectionRelatedContainer";

const Photo = (props) => {

    return (
        <Container>
            <PhotoContainer {...props}/>
            <CollectionRelatedContainer {...props}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default Photo;