import React from "react";
import styled from "styled-components";
import Visual from "../../components/Home/Visual";
import MainPhotoContainer from "../../components/containers/MainPhotoContainer";

const Home = () => {

    return (
        <Container>
            <Visual/>
            <MainPhotoContainer/>
        </Container>
    )
}

const Container = styled.div`
    
`;

export default Home;