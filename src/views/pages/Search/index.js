import React from "react";
import styled from "styled-components";
import SearchPhotoContainer from "../../components/containers/SearchPhotoContainer";
import PageTitle from "../../components/Title/PageTitle";
import {ContentContainer} from "../../components/Layout/Layout.Styled";
import SearchCollectionContainer from "../../components/containers/SearchCollectionContainer";
import SearchAppbar from "../../components/Search/SearchAppbar";
import SearchUserContainer from "../../components/containers/SearchUserContainer";

const Search = (props) => {

    const query = props.match.params.query;
    const category = props.match.params.category;

    const Render = () => {
        switch (category) {
            default: return null;
            case "photos" : {
                return <SearchPhotoContainer {...props}/>
            }
            case "collections" : {
                return <SearchCollectionContainer {...props}/>
            }
            case "users" : {
                return <SearchUserContainer {...props}/>
            }
        }
    }

    return (
        <Container>
            <SearchAppbar query={query} category={category}/>
            <ContentContainer>
                <PageTitle title={query}/>
                <Render/>
            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`

`;

export default Search;