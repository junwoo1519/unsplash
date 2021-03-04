import React from "react";
import styled from "styled-components";
import TopicContainer from "../../containers/TopicContainer";
import TopicPhotoContainer from "../../containers/TopicPhotoContainer";

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