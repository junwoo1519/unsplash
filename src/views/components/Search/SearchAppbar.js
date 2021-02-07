import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const SearchAppbar = ({query}) => {

    return (
        <Container>
            <Menus>
                <MenuItem to={`/search/photos/${query}`}>photos</MenuItem>
                <MenuItem to={`/search/collections/${query}`}>collections</MenuItem>
                <MenuItem to={`/search/users/${query}`}>users</MenuItem>
            </Menus>
        </Container>
    )
}

const Container = styled.div`
  padding: 0 50px;
`;

const Menus = styled.div`
  display: flex;
`;

const MenuItem = styled(Link)`
  padding: 20px 10px;
  text-transform: capitalize;
  color: #333;
`;

export default SearchAppbar;