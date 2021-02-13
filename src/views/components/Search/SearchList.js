import React from "react";
import styled from "styled-components";

const SearchList = ({list, render}) => {

    return (
        <Container>
            {
                list.map((item, index) => (
                    <Col key={index}>
                        {render(item, index)}
                    </Col>
                ))
            }
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Col = styled.div`
  width: 33.3333%;
  padding: 12px;
`;

export default SearchList;