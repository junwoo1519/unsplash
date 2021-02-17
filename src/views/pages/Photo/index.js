import React from "react";
import styled from "styled-components";
import PhotoContainer from "../../components/containers/PhotoContainer";
import PhotoRelatedContainer from "../../components/containers/PhoroRelatedContainer";

const Photo = (props) => {

    return (
        <Container>
            <PhotoContainer {...props}/>
            <PhotoRelatedContainer {...props}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default Photo;