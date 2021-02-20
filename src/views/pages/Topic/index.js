import React from "react";
import styled from "styled-components";
import TopicContainer from "../../components/containers/TopicContainer";
import TopicPhotoContainer from "../../components/containers/TopicPhotoContainer";

const Topic = (props) => {

    return (
        <Container>
            <TopicContainer {...props}/>
            <TopicPhotoContainer {...props}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default Topic;