import React from "react";
import styled from "styled-components";
import TopicContainer from "../../components/containers/TopicContainer";

const Topic = (props) => {

    return (
        <Container>
            <TopicContainer {...props}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default Topic;