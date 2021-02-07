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

`;

const Col = styled.div`
    
`;

export default SearchList;