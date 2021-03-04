import React from "react";
import styled from "styled-components";
import Visual from "../../components/Home/Visual";
import MainPhotoContainer from "../../containers/MainPhotoContainer";
import {ContentContainer} from "../../components/Layout/Layout.Styled";

const Home = () => {

    return (
        <Container>
            <Visual/>
            <ContentContainer>
                <MainPhotoContainer/>
            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`
    
`;

export default Home;