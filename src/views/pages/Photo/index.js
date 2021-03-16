import React from "react";
import styled from "styled-components";
import PhotoContainer from "../../containers/PhotoContainer";
import CollectionRelatedContainer from "../../containers/CollectionRelatedContainer";

const Photo = (props) => {

    return (
        <Container>
            <PhotoContainer {...props}/>
            <Related>
                <CollectionRelatedContainer {...props}/>
            </Related>
        </Container>
    )
}

const Container = styled.div`

`;

const Related = styled.div`
  width: 85%;
  margin: 0 auto;
`;

export default Photo;