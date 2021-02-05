import React from "react";
import styled from "styled-components";
import SearchPhotoContainer from "../../components/containers/SearchPhotoContainer";

const Search = (props) => {

    return (
        <Container>
            <SearchPhotoContainer {...props}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default Search;