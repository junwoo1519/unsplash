import React from "react";
import styled from "styled-components";
import SearchPhotoContainer from "../../components/containers/SearchPhotoContainer";
import PageTitle from "../../components/Title/PageTitle";
import {ContentContainer} from "../../components/Layout/Layout.Styled";
import {Route, Switch} from "react-router-dom";
import SearchCollectionContainer from "../../components/containers/SearchCollectionContainer";
import SearchAppbar from "../../components/Search/SearchAppbar";

const Search = ({location}) => {

    const query = location.pathname.split("/").pop();

    return (
        <Container>
            <ContentContainer>
            <SearchAppbar query={query}/>
                <PageTitle title={query}/>
                <Switch>
                    <Route path={"/search/photos/:query"} component={SearchPhotoContainer}/>
                    <Route path={"/search/collections/:query"} component={SearchCollectionContainer}/>
                </Switch>
            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`

`;

export default Search;