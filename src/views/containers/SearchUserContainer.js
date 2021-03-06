import React, {useEffect, useCallback} from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../redux/search/redux";
import SearchList from "../components/Search/SearchList";
import UserItem from "../components/Search/UserItem";
import Consts from "../../constants";

const SearchUserContainer = ({match}) => {

    const dispatch = useDispatch();
    const query = match.params.query;
    const {users} = useSelector(state => state.search)

    const searchUsers = useCallback(() => {
        dispatch(Action.Creators.searchUsers({
            query,
            client_id: Consts.CLIENT_ID,
            per_page: 15,
        }))
    }, [dispatch, query]);

    useEffect(() => {
        searchUsers();
    }, [searchUsers]);

    // const searchUsers = () => {
    //     dispatch(Action.Creators.searchUsers({
    //         query,
    //         client_id: Consts.CLIENT_ID,
    //         per_page: 15,
    //     }))
    // };

    const render = (item, index) => {

        return (
            <UserItem {...item}/>
        )
    }

    return (
        <Container>
            <SearchList list={users.results}
                        render={render}
            />
        </Container>
    )
}

const Container = styled.div`

`;

export default SearchUserContainer;