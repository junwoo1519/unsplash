import React from "react";
import styled from "styled-components";

const Following = () => {

    return (
        <Container>
            <Title>
                <h1>Following</h1>
                <p>The latest photos from photographers you follow.</p>
            </Title>
            <SubTitle>
                <span>No photos to display. Follow some Unsplash photographers and check back soon.</span>
            </SubTitle>
        </Container>
    )
}

const Container = styled.div`
  margin: 0 148px;

  h1 {
    font-size: 46px;
    margin: 0 0 16px;
  }

  p {
    font-size: 18px;

  }
`;

const Title = styled.div`
  height: 279px;
  padding: 60px 12px 72px;
`;

const SubTitle = styled.div`
  font-size: 15px;

  span {
    padding: 0 12px;
  }
`;

export default Following;

