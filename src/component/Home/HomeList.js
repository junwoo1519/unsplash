import React from "react";
import styled from "styled-components";
import HomeCard from "./HomeCard";

const HomeList = ({List}) => {

    return (
        <Container>
            <Row>
                {
                    List.map((item, index) => (
                        <Col key={index}>
                            <HomeCard {...item}/>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`;

const Col = styled.div`
  width: 33.3333%;
  padding: 15px;
`;

export default HomeList;