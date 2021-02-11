import React from "react";
import styled from "styled-components";

const PageTitle = ({title, description}) => {

    return (
        <Container>
            <h1>{title}</h1>
            {
                description &&
                <p>{description}</p>
            }
        </Container>
    )
}

const Container = styled.div`
  padding: 62px 0 60px;

  h1 {
    font-size: 46px;
    color: #111;
    margin-bottom: 16px;
    text-transform: capitalize;
  }

`;

export default PageTitle;