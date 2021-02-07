import React from "react";
import styled from "styled-components";
import SearchList from "../Search/SearchList";
import UserItem from "../Search/UserItem";

const SearchUserContainer = () => {

    const render = (item, index) => {

        return (
            <UserItem/>
        )
    }

    return (
        <Container>
            <SearchList list={[]}
                        render={render}
            />
        </Container>
    )
}

const Container = styled.div`

`;

export default SearchUserContainer;