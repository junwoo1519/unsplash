import React from "react";
import styled from "styled-components";

const PhotoRelated = ({photos}) => {

    return (
        <Container>
            <Title>
            </Title>
            {/*<img src={photos.urls.full} alt=""/>*/}
        </Container>
    )
}

const Container = styled.div`
  margin: 0 10%;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 400;
`;

export default PhotoRelated;