import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import cn from "classnames"
import {IconCollections, IconPhotos, IconUsers} from "../../../icons";

const
    SearchAppbar = ({category, query}) => {

    const searchBarRoute = [
        {
            name: "photos",
            to: `/search/photos/${query}`,
            icon: <IconPhotos/>,
        },
        {
            name: "collections",
            to: `/search/collections/${query}`,
            icon: <IconCollections/>,
        },
        {
            name: "users",
            to: `/search/users/${query}`,
            icon: <IconUsers/>,
        }
    ]

    return (
        <Container>
            <Menus>
                {
                    searchBarRoute.map((item, i) => (
                        <MenuItem key={i} to={item.to} className={cn({isActive: category === item.name})}>
                            {item.icon}
                            {item.name}
                        </MenuItem>
                    ))
                }
            </Menus>
        </Container>
    )
}

const Container = styled.div`
  padding: 0 20px;
  border-bottom: 1px solid #d1d1d1;
`;

const Menus = styled.div`
  display: flex;
  height: 55px;
`;

const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  height: 56px;
  font-size: 14px;
  font-weight: 400;
  text-transform: capitalize;
  color: #767676;
  margin-right: 32px;
  border-bottom: 2px solid transparent;

  &.isActive {
    border-color:#000;
    
  }

  &.isActive,
  &:hover {
    color: #000;

    svg {
      opacity: 1;
    }
  }

  svg {
    width: 18px;
    height: 18px;
    margin-right: 8px;
    opacity: .3;
  }

`;

export default SearchAppbar;