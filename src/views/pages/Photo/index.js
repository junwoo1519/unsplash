import React from "react";
import styled from "styled-components";
import PhotoContainer from "../../components/containers/PhotoContainer";

const Photo = (props) => {

    const id = props.match.params.id;
    
    console.log("@@ id", id);

    return (
        <Container>
            <PhotoContainer id={id}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default Photo;